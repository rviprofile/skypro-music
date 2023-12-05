import * as S from "../tracklist/styles.js"
import Filter from "../filter/filter";
import PlaylistTitle from "../playlist/playlistTitle";
import Search from "../search/search";

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
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
            <img src="/img/skeleton/1107x51.svg"></img>
          </S.PlaylistItem>
        </S.ContentPlaylist>

      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}
