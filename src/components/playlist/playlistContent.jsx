import * as S from "./styles.js";
import duration from "../duration.js";
import { activeTrackCreator } from "../../store/actions/creators/activeTrack.js";
import { store } from "../../store/store.js";
import { useEffect, useState } from "react";
import { changePlaylistCreator } from "../../store/actions/creators/activeTrack.js";

export default function PlaylistContent({ arr }) {

  // Состояние с ID активного трека
  const [actualId, setActualId] = useState(0);

  // Состояние с активностью плеера
  const [isPlaying, setIsPlaying] = useState();

  // Подписка на изменение состояния в store
  store.subscribe(() => {
    // Запишем новое состояние в переменную
    const actualState = store.getState();
    // Кинем id в локальное состояние
    setActualId(actualState.trackStore.trackReducer.id);
    setIsPlaying(actualState.trackStore.isPlaying);
  });

  // Обновление состояний в store
  const clickItemDispatch = (item) => {
    store.dispatch(activeTrackCreator(item));
    store.dispatch(changePlaylistCreator(arr));
  };

  const PlayListItems = arr.map((item) => (
    <S.PlaylistItem key={item.id} onClick={() => clickItemDispatch(item)}>
      <S.PlaylistTrack>
        <S.TrackTitleOnList>
          <S.TrackTitleImage>
            {actualId === item.id ? (
              <S.Pulser paused={isPlaying ? undefined : true}></S.Pulser>
            ) : (
              <S.PlaylistTitleSvg alt="music">
                <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
              </S.PlaylistTitleSvg>
            )}
          </S.TrackTitleImage>
          <div>
            <S.TrackTitle>
              {item.name}
              <S.TrackTitleSpan> {item.comment}</S.TrackTitleSpan>
            </S.TrackTitle>
          </div>
        </S.TrackTitleOnList>
        <S.TrackAuthorOnList>
          <S.TrackAuthorLink href="http://">{item.author}</S.TrackAuthorLink>
        </S.TrackAuthorOnList>
        <S.TrackAlbumOnList>
          <S.TrackAlbumLink href="http://">{item.album}</S.TrackAlbumLink>
        </S.TrackAlbumOnList>
        <S.LikeTimeBox>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>
            {duration(item.duration_in_seconds)}
          </S.TrackTimeText>
        </S.LikeTimeBox>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  ));

  return <S.ContentPlaylist>{PlayListItems}</S.ContentPlaylist>;
}
