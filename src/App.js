import React from "react";
import * as S from "./styles.js"
import { useEffect, useState } from "react";
import AudioPlayer from "./components/audioPlayer/audioPlayer";
import AudioPlayerSkeleton from "./components/skeletons/audioPlayerSkeleton";
import NavMenu from "./components/navMenu/navMenu.js";
import Sidebar from "./components/sidebar/sidebar.js";
import SidebarSkeleton from "./components/skeletons/sidebarSkeleton";
import TrackList from "./components/tracklist/trackList.js";
import TrackListSkeleton from "./components/skeletons/trackListSkeleton";
import loadingDelay from "./components/loading";
import { AppRoutes } from "./routes.jsx";

function App() {

  // Псевдозагрузка
  const [load, setLoad] = useState(true);
  useEffect(() => {
    loadingDelay(load, setLoad, 2000);
  }, []);

  return (
    <>
    <S.GlobalStyle />
    <S.Wrapper>
    <AppRoutes/>
      <S.Container>
        <S.Main>
          <NavMenu />
          {load ? <TrackListSkeleton /> : <TrackList />}
          {load ? <SidebarSkeleton /> : <Sidebar />}
        </S.Main>
        {load ? <AudioPlayerSkeleton /> : <AudioPlayer />}
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
    </>
  );
}

export default App;
