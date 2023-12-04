import * as S from "./styles.js"
import Filter from "../filter/filter";
import PlaylistContent from "../playlist/playlistContent";
import PlaylistTitle from "../playlist/playlistTitle";
import Search from "../search/search";
import { ArrForRender } from "../playlist/arrForRender.js";

export default function TrackList() {
  return (
    <S.MainCenterblock>
      <Search />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <Filter />
      <S.CenterblockContent>
        <PlaylistTitle />
        <PlaylistContent arr={ArrForRender}/>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}
