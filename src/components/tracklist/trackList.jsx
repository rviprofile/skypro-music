import * as S from "./styles.js";
import Filter from "../filter/filter.jsx";
import PlaylistContent from "../playlist/playlistContent.jsx";
import PlaylistTitle from "../playlist/playlistTitle.jsx";
import Search from "../search/search.jsx";
import { useState } from "react";

export default function TrackList({tracks, error, title}) {
  // Локальное состояние с активным плелийтом и функцией, которая нужна для фильтрации
  const [playlist, setPlaylist] = useState(tracks)
  // Функция возвращает плелист по умолчанию
  const resetFilters = () => {
    setPlaylist(tracks)
  }
  return (
    <S.MainCenterblock>
      <Search arr={tracks} setPlaylist={setPlaylist}/>
      {error ? <S.ErrorH2>Не удалось загрузить плейлист, попробуйте позже</S.ErrorH2> : <S.CenterblockH2>{title}</S.CenterblockH2>}
      <Filter arr={playlist} setPlaylist={setPlaylist} resetFilters={resetFilters}/>
      <S.CenterblockContent>
        <PlaylistTitle />
        <PlaylistContent arr={playlist}/>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}
