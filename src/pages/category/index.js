import React from "react";
import * as S from "../../styles.js";
import AudioPlayer from "../../components/audioPlayer/audioPlayer.js";
import NavMenu from "../../components/navMenu/navMenu.js";
import Sidebar from "../../components/sidebar/sidebar.js";
import CategoryTrackList from "../../components/category/categoryTrackList";

export const CategoryPage = () => {

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <CategoryTrackList />
          <Sidebar />
        </S.Main>
        <AudioPlayer />
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  );
};
