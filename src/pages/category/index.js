import React from "react";
import * as S from "../../styles.js";
import AudioPlayer from "../../components/audioPlayer/audioPlayer.jsx";
import NavMenu from "../../components/navMenu/navMenu.jsx";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import CategoryTrackList from "../../components/category/categoryTrackList.jsx";

export const CategoryPage = () => {

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <CategoryTrackList />
          <Sidebar />
        </S.Main>
        {/* <AudioPlayer /> */}
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  );
};
