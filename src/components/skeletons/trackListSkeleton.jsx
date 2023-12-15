import * as S from "../tracklist/styles.js"
import Filter from "../filter/filter.jsx";
import PlaylistTitle from "../playlist/playlistTitle.jsx";
import Search from "../search/search.jsx";

export default function TrackListSkeleton() {
  return (
    <S.MainCenterblock>
      <Search />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <Filter />
      <S.CenterblockContent>
        <PlaylistTitle />
        <S.ContentPlaylist>
          <S.PlaylistItem>
            <S.SkeletonTrack  src="/img/skeleton/1107x51.svg"/>
            <S.SkeletonTrack  src="/img/skeleton/1107x51.svg"/>
            <S.SkeletonTrack  src="/img/skeleton/1107x51.svg"/>
            <S.SkeletonTrack  src="/img/skeleton/1107x51.svg"/>
            <S.SkeletonTrack  src="/img/skeleton/1107x51.svg"/>
            <S.SkeletonTrack  src="/img/skeleton/1107x51.svg"/>
            <S.SkeletonTrack  src="/img/skeleton/1107x51.svg"/>
            <S.SkeletonTrack  src="/img/skeleton/1107x51.svg"/>
            <S.SkeletonTrack  src="/img/skeleton/1107x51.svg"/>
            <S.SkeletonTrack  src="/img/skeleton/1107x51.svg"/>
          </S.PlaylistItem>
        </S.ContentPlaylist>

      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}
