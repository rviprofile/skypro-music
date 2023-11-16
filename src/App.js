import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import AudioPlayer from "./components/audioPlayer";
import AudioPlayerSkeleton from "./components/audioPlayerSkeleton";
import NavMenu from "./components/navMenu";
import Sidebar from "./components/sidebar";
import SidebarSkeleton from "./components/sidebarSkeleton";
import TrackList from "./components/trackList";
import TrackListSkeleton from "./components/trackListSkeleton";
import loadingDelay from "./components/loading";

function App() {
  
  // Псевдозагрузка
  const [load, setLoad] = useState(true);
  useEffect(() => {
    loadingDelay(load, setLoad, 2000)
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
