import * as S from "./styles.js";
import duration from "../duration.js";

export default function PlaylistContent({arr}) {
  const PlayListItems = arr.tracks.map((item) => (
    <S.PlaylistItem key={item.id}>
      <S.PlaylistTrack>
        <S.TrackTitleOnList>
          <S.TrackTitleImage>
            <S.PlaylistTitleSvg alt="music">
              <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
            </S.PlaylistTitleSvg>
          </S.TrackTitleImage>
          <div>
            <S.TrackTitleLink href="http://">
              {item.name}
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
        <S.LikeTimeBox>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{duration(item.duration_in_seconds)}</S.TrackTimeText>
        </S.LikeTimeBox>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  ));

  return <S.ContentPlaylist>{PlayListItems}</S.ContentPlaylist>;
}
