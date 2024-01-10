import * as S from "./styles.js";
import { useEffect, useRef, useState } from "react";
import FormatDuration from "../duration.js";
import { store } from "../../store/store.js";

export default function AudioPlayer() {

  // Раньше это был пропс, а теперь локальное состояние
  const [activePlayer, setActivePlayer] = useState(false)

  // Подписка на состояние из store
  store.subscribe(() => {
    setActivePlayer(store.getState().trackStore.trackReducer)
  })

  // Ссылка на тег audio
  const audioRef = useRef();

  // Ссылка на элемент S.VolumeProgressLine
  const volumeElemRef = useRef();

  // Состояние - играет ли трек
  const [isPlaying, setIsPlaying] = useState(false);

  // Состояние времени воспроизведения трека
  const [timeOnBar, setTimeOnBar] = useState(0);

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

  // Состояние общей длительности трека
  const [durationonBar, setDurationOnBar] = useState(100);

  // Функция включает трек и меняет состояние
  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  // При обновлении activePlayer запускает handleStart
  // и меняет время воспроизведения трека
  useEffect(() => {
    if (activePlayer) {
      handleStart();
      audioRef.current.ontimeupdate = (event) => {
        setTimeOnBar(audioRef.current.currentTime);
        setDurationOnBar(audioRef.current.duration)
      };
    }
  }, [activePlayer]);

  // Функция выключает трек и меняет состояние
  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  // Переключатель функций от isPlaying
  const togglePlay = isPlaying ? handleStop : handleStart;

  // Управление репитом
  const [isLoop, setIsLoop] = useState(false);
  const toggleLoop = () => {
    isLoop ? setIsLoop(false) : setIsLoop(true);
  };

  // Ошибка при нажатии на рандом и следущий трек 
  const alertError = () => {
    alert("Эта функция ещё не реализована")
  }

  // Функция форматирует и возвращает строку "Время воспроизведения : Длительность трека"
  const TimersString = () => {
    if (activePlayer) {
      return `${FormatDuration(timeOnBar)} / ${FormatDuration(durationonBar)}`
    }

  }

  return activePlayer ? (
    <S.Bar>
      <audio
        src={activePlayer.track_file}
        ref={audioRef}
        loop={isLoop}
      ></audio>
      <S.ActualTimer>{TimersString()}</S.ActualTimer>
      <S.BarContent>
        <S.BarPlayerProgress
          type="range"
          min={0}
          max={durationonBar}
          step={0.01}
          value={timeOnBar}
          onChange={(handleRewind)}
          ref={BarProgressRef}
        ></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev onClick={alertError}>
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
              <S.PlayerBtnNext onClick={alertError}>
                <S.PlayerBtnNextSvg>
                  <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat onClick={toggleLoop}>
                <S.PlayerBtnRepeatSvg>
                  {isLoop ? <use xlinkHref="/img/icon/sprite.svg#icon-repeatactive"></use> : <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>}
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle onClick={alertError}>
                <S.PlayerBtnShuffleSvg>
                  <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
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
