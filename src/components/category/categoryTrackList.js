import * as S from "./styles.js";
import Search from "../search/search.js";
import { ArrayCategory } from "../playlist/arrForRender.js";
import { useParams } from "react-router-dom";
import PlaylistTitle from "../playlist/playlistTitle.js";
import PlaylistContent from "../playlist/playlistContent.js";
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
