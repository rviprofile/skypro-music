import * as S from "./styles.js";
import Filter from "../filter/filter.jsx";
import PlaylistContent from "../playlist/playlistContent.jsx";
import PlaylistTitle from "../playlist/playlistTitle.jsx";
import Search from "../search/search.jsx";

export default function TrackList({tracks, setActivePlayer, error}) {
  return (
    <S.MainCenterblock>
      <Search />
      {error ? <S.ErrorH2>Не удалось загрузить плейлист, попробуйте позже</S.ErrorH2> : <S.CenterblockH2>Треки</S.CenterblockH2>}
      <Filter arr={tracks}/>
      <S.CenterblockContent>
        <PlaylistTitle />
        <PlaylistContent arr={tracks} setActivePlayer={setActivePlayer}/>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}
