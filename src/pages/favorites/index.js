import React from "react";
import * as S from "../../styles.js";
import AudioPlayer from "../../components/audioPlayer/audioPlayer.js";
import NavMenu from "../../components/navMenu/navMenu.js";
import Sidebar from "../../components/sidebar/sidebar.js";
import FavoritesTrackList from "../../components/favorites/favoritesTrackList.js";

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