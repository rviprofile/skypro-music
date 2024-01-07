import * as S from "./styles.js";
import duration from "../duration.js";
import { activeTrackRedux } from "../../store/actions/creators/activeTrack.js";
import { store } from "../../store/store.js";
import { useSelector } from "react-redux";
import { playerSelector } from "../../store/selectors/activePlayer.js";

export default function PlaylistContent({ arr, setActivePlayer }) {
  store.subscribe(() => {
    const actualState = store.getState()
    console.log(actualState);
  })
  // Обновление состояния в store
  const clickItemDispatch = (item) => {
    store.dispatch(activeTrackRedux(item))
  }
  // Обновление состоаяния activePlayer в MainPage
  const clickItem = (item) => {
    setActivePlayer(item);
  };

  const PlayListItems = arr.map((item) => (
    <S.PlaylistItem key={item.id} onClick={() => clickItemDispatch(item)}>
      <S.PlaylistTrack>
        <S.TrackTitleOnList>
          <S.TrackTitleImage>
            <S.PlaylistTitleSvg alt="music">
              <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
            </S.PlaylistTitleSvg>
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
