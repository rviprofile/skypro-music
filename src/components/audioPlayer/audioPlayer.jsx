import * as S from "./styles.js";
import { useEffect, useRef, useState } from "react";
import FormatDuration from "../duration.js";
import { store } from "../../store/store.js";
import {
  activeTrackCreator,
  changePlaylistCreator,
  pauseTrackCreator,
  unPauseTrackCreator,
} from "../../store/actions/creators/activeTrack.js";

export default function AudioPlayer() {
  // Раньше это был пропс, а теперь локальное состояние с активным треком
  const [activePlayer, setActivePlayer] = useState(false);

  // Локальное состояние с активным плейлистом
  const [activePlaylist, setActivePlaylist] = useState();
  const [backupActivePlaylist, setBackupActivePlaylist] = useState();

  // Подписка на состояние из store
  store.subscribe(() => {
    // Активный трек в activePlayer
    setActivePlayer(store.getState().trackStore.trackReducer);
    // Активный плейлист в activePlaylist
    setActivePlaylist(store.getState().playlistStore.playlistReducer);
  });

  // Состояние, перемешан ли плейлист
  const [isShuffle, setIsShuffle] = useState(false);

  // Функция перемешивает список
  const shufflePlaylist = () => {
    if (!isShuffle) {
      // Сохраняем то, что хотим перемешать в backup
      setBackupActivePlaylist(activePlaylist)
      // Перемешиваем активный плейлист
      const randomList = Object.values(activePlaylist).sort(
        () => Math.random() - 0.5
      );
      // Отправляем его в store
      store.dispatch(changePlaylistCreator(randomList));
    } else {
      // Отправляем в store заранее сохраненный плейлист
      store.dispatch(changePlaylistCreator(backupActivePlaylist))
    }
    // Меняем состояние
    setIsShuffle(!isShuffle);
  };

  // Ссылка на тег audio
  const audioRef = useRef();

  // Ссылка на элемент S.VolumeProgressLine
  const volumeElemRef = useRef();

  // Состояние - играет ли трек.
  const [isPlaying, setIsPlaying] = useState(false);

  // Состояние времени воспроизведения трека
  const [timeOnBar, setTimeOnBar] = useState(0);

  // Состояние общей длительности трека
  const [durationonBar, setDurationOnBar] = useState(100);

  // Управление громкостью
  const handleVolme = () => {
    audioRef.current.volume = volumeElemRef.current.value;
  };

  // Управление перемоткой
  const BarProgressRef = useRef();
  const handleRewind = () => {
    setTimeOnBar(BarProgressRef.current.value);
    audioRef.current.currentTime = BarProgressRef.current.value;
  };

  // Управление репитом
  const [isLoop, setIsLoop] = useState(false);
  const toggleLoop = () => {
    isLoop ? setIsLoop(false) : setIsLoop(true);
  };

  // Функция включает трек и меняет состояния
  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
    store.dispatch(unPauseTrackCreator());
  };

  // Функция выключает трек и меняет состояние
  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
    store.dispatch(pauseTrackCreator());
  };

  // При обновлении activePlayer запускает handleStart
  // и меняет время воспроизведения трека
  useEffect(() => {
    if (activePlayer) {
      handleStart();
      audioRef.current.ontimeupdate = (event) => {
        setTimeOnBar(audioRef.current.currentTime);
        setDurationOnBar(audioRef.current.duration);
      };
    }
  }, [activePlayer]);

  // Переключатель функций от isPlaying
  const togglePlay = isPlaying ? handleStop : handleStart;

  // Функция форматирует и возвращает строку "Время воспроизведения : Длительность трека"
  const TimersString = () => {
    if (activePlayer) {
      return `${FormatDuration(timeOnBar)} / ${FormatDuration(durationonBar)}`;
    }
  };

  // Функция возвращает следующий или предыдущий элемент акнтивного плейлиста относительно активного трека
  function moveOnList(action) {
    // Создаем пустой массив
    const arr = [];
    // Наполняем его треками из плейлиста
    for (const item of Object.entries(activePlaylist)) {
      arr.push(item[1]);
    }
    // Находим нужный трек в этом массиве по индексу
    const indexOfActive = (element) => element.id === activePlayer.id;
    switch (action) {
      case "NEXT": {
        // Если следующий трек существует
        if (arr[arr.findIndex(indexOfActive) + 1]) {
          // Вернется следущий трек
          return arr[arr.findIndex(indexOfActive) + 1];
        } else {
          // Если нет, вернется первый трек в списке
          return arr[0];
        }
      }
      case "PREV": {
        // Если предыдущий трек существует
        if (arr[arr.findIndex(indexOfActive) - 1]) {
          // Вернется предыдущий трек
          return arr[arr.findIndex(indexOfActive) - 1];
        } else {
          // Если нет, вернется первый трек в списке
          return arr[0];
        }
      }
      default:
        return activePlayer;
    }
  }

  // Когда трек заканчивается
  const onEnded = () => {
    store.dispatch(activeTrackCreator(moveOnList("NEXT")));
  };

  // Переход к предыдущему треку
  const prevButtonClick = () => {
    store.dispatch(activeTrackCreator(moveOnList("PREV")));
  };

  return activePlayer ? (
    <S.Bar>
      <audio
        src={activePlayer.track_file}
        ref={audioRef}
        loop={isLoop}
        onEnded={onEnded}
      ></audio>
      <S.ActualTimer>{TimersString()}</S.ActualTimer>
      <S.BarContent>
        <S.BarPlayerProgress
          type="range"
          min={0}
          max={durationonBar}
          step={0.01}
          value={timeOnBar}
          onChange={handleRewind}
          ref={BarProgressRef}
        ></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev onClick={prevButtonClick}>
                <S.PlayerBtnPrevSvg>
                  <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay onClick={togglePlay}>
                <S.PlayerBtnPlaySvg>
                  {isPlaying ? (
                    <use xlinkHref="/img/icon/sprite.svg#icon-pause"></use>
                  ) : (
                    <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                  )}
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext onClick={onEnded}>
                <S.PlayerBtnNextSvg>
                  <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat onClick={toggleLoop}>
                <S.PlayerBtnRepeatSvg>
                  {isLoop ? (
                    <use xlinkHref="/img/icon/sprite.svg#icon-repeatactive"></use>
                  ) : (
                    <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                  )}
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle onClick={shufflePlaylist}>
                <S.PlayerBtnShuffleSvg>
                  {isShuffle ? (
                    <use xlinkHref="/img/icon/sprite.svg#icon-shuffleactive"></use>
                  ) : (
                    <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                  )}
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>

            <S.PlayerTrackPlay>
              <S.TrackPlaycontain>
                <S.TrackPlayimage>
                  <S.TrackPlaysvg>
                    <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                  </S.TrackPlaysvg>
                </S.TrackPlayimage>

                <S.TrackPlayName>
                  <S.TrackPlayNameLink href="http://">
                    {activePlayer.name}
                  </S.TrackPlayNameLink>
                </S.TrackPlayName>

                <S.TrackPlayAuthor>
                  <S.TrackPlayAuthorLink href="http://">
                    {activePlayer.author}
                  </S.TrackPlayAuthorLink>
                </S.TrackPlayAuthor>
              </S.TrackPlaycontain>

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike>
                  <S.TrackPlaylikeSvg alt="like">
                    <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlaylikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike>
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>

          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress>
                <S.VolumeProgressLine
                  type="range"
                  name="volume"
                  min={0}
                  max={1}
                  step={0.01}
                  ref={volumeElemRef}
                  onChange={handleVolme}
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  ) : (
    ""
  );
}
