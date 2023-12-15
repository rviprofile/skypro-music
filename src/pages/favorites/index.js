import React from "react";
import * as S from "../../styles.js";
import AudioPlayer from "../../components/audioPlayer/audioPlayer.jsx";
import NavMenu from "../../components/navMenu/navMenu.jsx";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import FavoritesTrackList from "../../components/favorites/favoritesTrackList.jsx";

export const FavoritesPage = () => {

    return (
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu />
            <FavoritesTrackList />
            <Sidebar />
          </S.Main>
          <AudioPlayer />
          <footer className="footer"></footer>
        </S.Container>
      </S.Wrapper>
    );
  };