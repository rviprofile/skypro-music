import * as S from "./styles.js";
import { ArrForRender } from "./arrForRender.js";

export default function PlaylistContent() {
  const PlayListItems = ArrForRender.map((item) => (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitleOnList>
          <S.TrackTitleImage>
            <S.PlaylistTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.PlaylistTitleSvg>
          </S.TrackTitleImage>
          <div>
            <S.TrackTitleLink href="http://">
              {item.tittle}
              <S.TrackTitleSpan> {item.comment}</S.TrackTitleSpan>
            </S.TrackTitleLink>
          </div>
        </S.TrackTitleOnList>
        <S.TrackAuthorOnList>
          <S.TrackAuthorLink href="http://">{item.author}</S.TrackAuthorLink>
        </S.TrackAuthorOnList>
        <S.TrackAlbumOnList>
          <S.TrackAlbumLink href="http://">{item.album}</S.TrackAlbumLink>
        </S.TrackAlbumOnList>
        <div>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{item.trackTime}</S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  ));

  return <S.ContentPlaylist>{PlayListItems}</S.ContentPlaylist>;
}