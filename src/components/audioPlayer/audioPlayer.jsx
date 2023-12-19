import * as S from "./styles.js";
import { useEffect, useRef, useState } from "react";

export default function AudioPlayer({ activePlayer }) {
  // Ссылка на тег audio
  const audioRef = useRef();

  // Ссылка на элемент S.VolumeProgressLine
  const volumeElemRef = useRef();

  // Состояние - играет ли трек
  const [isPlaying, setIsPlaying] = useState(false);

  // Управление громкостью
  const handleVolme = () => {
    audioRef.current.volume = volumeElemRef.current.value;
  }

  // Функция включает трек и меняет состояние
  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  // Состояние времени воспроизведения трека
  const [timeOnBar, setTimeOnBar] = useState(0);

  // При обновлении activePlayer запускает handleStart
  // и меняет время воспроизведения трека
  useEffect(() => {
    if (activePlayer) {
      handleStart();
      audioRef.current.ontimeupdate = (event) => {
        setTimeOnBar(audioRef.current.currentTime);
      };
    }
  }, [activePlayer]);

  // Функция выключает трек и меняет состояние
  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
    console.log(audioRef.current.currentTime);
  };

  // Переключатель функций от isPlaying
  const togglePlay = isPlaying ? handleStop : handleStart;

  // Управление репитом
  const [isLoop, setIsLoop] = useState(false);
  const toggleLoop = () => {
    isLoop ? setIsLoop(false) : setIsLoop(true);
  };

  return activePlayer ? (
    <S.Bar>
      <audio
        src={activePlayer.track_file}
        controls
        ref={audioRef}
        loop={isLoop}
      ></audio>
      <S.BarContent>
        <S.BarPlayerProgress
          type="range"
          min={0}
          max={activePlayer.duration_in_seconds}
          step={0.01}
          value={timeOnBar}
        ></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
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
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg>
                  <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat onClick={toggleLoop}>
                <S.PlayerBtnRepeatSvg>
                  <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle>
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
