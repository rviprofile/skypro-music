import * as S from "./styles.js";
import duration from "../duration.js";
import { activeTrackCreator } from "../../store/actions/creators/activeTrack.js";
import { store } from "../../store/store.js";
import { useEffect, useState } from "react";
import { changePlaylistCreator } from "../../store/actions/creators/activeTrack.js";
import { getCookie } from "./../setCookie.js";
import { addLikeCreator } from "../../store/thunks/addLike.js";
import { useDispatch } from "react-redux";
import { deleteLikeCreator } from "../../store/thunks/deleteLike.js";

export default function PlaylistContent({ arr }) {
  // Состояние с ID активного трека
  const [actualId, setActualId] = useState(0);

  // Состояние с активностью плеера
  const [isPlaying, setIsPlaying] = useState();

  // Подписка на изменение состояния в store
  store.subscribe(() => {
    // Запишем новое состояние в переменную
    const actualState = store.getState();
    if (actualState.trackStore.trackReducer !== undefined) {
      // Кинем id в локальное состояние
      setActualId(actualState.trackStore.trackReducer.id);
    }
    // Кинем "играет ли трек" в локальное состояние
    setIsPlaying(actualState.trackStore.isPlaying);
  });

  // Cохраняем отображение активного трека в списке после перехода на другую страницу
  useEffect(() => {
    const actualState = store.getState();
    if (actualState.trackStore.trackReducer !== undefined) {
      // Кинем id в локальное состояние
      setActualId(actualState.trackStore.trackReducer.id);
    }
    // Кинем "играет ли трек" в локальное состояние
    setIsPlaying(actualState.trackStore.isPlaying);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname]);

  // Обновление состояния в store при клике на трек
  const clickItemDispatch = (item) => {
    // Активный трек в store теперь - item
    store.dispatch(activeTrackCreator(item));
    // Активный плейлист в store теперь - список, прилетевший из props
    store.dispatch(changePlaylistCreator(arr));
  };

  const dispatch = useDispatch();
  const handleLike = (item) => {
    if (window.location.pathname === "/favorites") {
      dispatch(deleteLikeCreator(item));
      return;
    }
    item.stared_user.map((elem) => elem.id).includes(Number(getCookie("id")))
      ? dispatch(deleteLikeCreator(item))
      : dispatch(addLikeCreator(item));
  };

  const correctIcon = (item) => {
    // Код ниже совершает две проверки.
    // 1. Если страница /favorites, то все лайки будут закрашены.
    if (window.location.pathname === "/favorites") {
      return <use xlinkHref="/img/icon/sprite.svg#icon-likeactive"></use>;
    }
    // 2. Если в списке лайкнувших ползователей есть id из Cookie, то лайк будет закрашен.
    if (
      item.stared_user.map((elem) => elem.id).includes(Number(getCookie("id")))
    ) {
      return <use xlinkHref="/img/icon/sprite.svg#icon-likeactive"></use>;
    }
    return <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>;
  };

  const PlayListItems = arr.map((item) => (
    <S.PlaylistItem key={item.id}>
      <S.PlaylistTrack>
        <S.TrackTitleOnList onClick={() => clickItemDispatch(item)}>
          <S.TrackTitleImage>
            {
              // Соответсвует ли id активного трека треку из списка?
              actualId === item.id ? (
                // Если да, то пульсирующий кружок
                <S.Pulser paused={isPlaying ? undefined : "true"}></S.Pulser>
              ) : (
                // Если нет, то нота
                <S.PlaylistTitleSvg alt="music">
                  <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                </S.PlaylistTitleSvg>
              )
            }
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
          <S.TrackTimeSvg alt="like" onClick={() => handleLike(item)}>
            {correctIcon(item)}
          </S.TrackTimeSvg>
          <S.TrackTimeText>
            {duration(item.duration_in_seconds)}
          </S.TrackTimeText>
        </S.LikeTimeBox>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  ));

  return (
    <S.ContentPlaylist>
      {PlayListItems.length === 0 ? (
        <S.PlaylistItem key={1}>
          <S.EmptyPlaylist>Плейлист пуст</S.EmptyPlaylist>
        </S.PlaylistItem>
      ) : (
        PlayListItems
      )}
    </S.ContentPlaylist>
  );
}
