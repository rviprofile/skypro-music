import * as S from "./styles.js";
import Search from "../search/search.js";
import PlaylistTitle from "../playlist/playlistTitle.js";
import PlaylistContent from "../playlist/playlistContent.js";
import { FavoritesArray } from "../playlist/arrForRender.js";

export default function FavoritesTrackList() {
    return (
          <S.MainCenterblock>
            <Search />
            <S.CenterblockH2>Мои треки</S.CenterblockH2>
            <S.CenterblockContent>
              <PlaylistTitle/>
              <PlaylistContent arr={FavoritesArray}/>
            </S.CenterblockContent>
          </S.MainCenterblock>
    );
  }