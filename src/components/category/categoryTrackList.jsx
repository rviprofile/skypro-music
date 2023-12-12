import * as S from "./styles.js";
import Search from "../search/search.jsx";
import { ArrayCategory } from "../playlist/arrForRender.jsx";
import { useParams } from "react-router-dom";
import PlaylistTitle from "../playlist/playlistTitle.jsx";
import PlaylistContent from "../playlist/playlistContent.jsx";
import React from "react";

export default function CategoryTrackList() {
  const params = useParams();
  const category = ArrayCategory.find(
    (category) => category.id === Number(params.id)
  );
  return (
    <S.MainCenterblock>
      <Search />
      <S.CenterblockH2>{category.title}</S.CenterblockH2>
      <S.CenterblockContent>
        <PlaylistTitle />
        <PlaylistContent arr={category.tracks} />
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}
