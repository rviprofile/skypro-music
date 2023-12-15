import * as S from "./styles.js";
import Search from "../search/search.jsx";
import PlaylistTitle from "../playlist/playlistTitle.jsx";
import PlaylistContent from "../playlist/playlistContent.jsx";
import { FavoritesArray } from "../playlist/arrForRender.jsx";

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