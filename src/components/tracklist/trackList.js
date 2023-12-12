import * as S from "./styles.js";
import Filter from "../filter/filter";
import PlaylistContent from "../playlist/playlistContent";
import PlaylistTitle from "../playlist/playlistTitle";
import Search from "../search/search";
import { useEffect, useState } from "react";
import getAllTracks from "../API/api.js";

export default function TrackList() {
  const [tracks, setTracks] = useState([])
  useEffect(() => {
    getAllTracks().then((data) => {
      console.log(data);
      setTracks(data)
    });
  }, []);
  return (
    <S.MainCenterblock>
      <Search />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <Filter />
      <S.CenterblockContent>
        <PlaylistTitle />
        <PlaylistContent arr={tracks} />
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}
