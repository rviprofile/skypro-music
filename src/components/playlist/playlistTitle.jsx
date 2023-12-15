import * as S from "./styles.js"

export default function PlaylistTitle() {
  return (
    <S.ContentTitle>
      <S.PlaylistTittleCol01>Трек</S.PlaylistTittleCol01>
      <S.PlaylistTittleCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTittleCol02>
      <S.PlaylistTittleCol03>АЛЬБОМ</S.PlaylistTittleCol03>
      <S.PlaylistTittleCol04>
        <S.PlaylistTitleSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
        </S.PlaylistTitleSvg>
      </S.PlaylistTittleCol04>
    </S.ContentTitle>
  );
}
