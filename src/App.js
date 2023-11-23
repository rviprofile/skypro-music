import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import AudioPlayer from "./components/audioPlayer/audioPlayer";
import AudioPlayerSkeleton from "./components/skeletons/audioPlayerSkeleton";
import NavMenu from "./components/navMenu/navMenu.js";
import Sidebar from "./components/sidebar/sidebar.js";
import SidebarSkeleton from "./components/skeletons/sidebarSkeleton";
import TrackList from "./components/tracklist/trackList.js";
import TrackListSkeleton from "./components/skeletons/trackListSkeleton";
import loadingDelay from "./components/loading";

function App() {
  // Псевдозагрузка
  const [load, setLoad] = useState(true);
  useEffect(() => {
    loadingDelay(load, setLoad, 2000);
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          {load ? <TrackListSkeleton /> : <TrackList />}
          {load ? <SidebarSkeleton /> : <Sidebar />}
        </main>
        {load ? <AudioPlayerSkeleton /> : <AudioPlayer />}
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
