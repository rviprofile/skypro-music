import "./App.css";
import AudioPlayer from "./components/audioPlayer";
import AudioPlayerSkeleton from "./components/audioPlayerSkeleton";
import NavMenu from "./components/navMenu";
import Sidebar from "./components/sidebar";
import SidebarSkeleton from "./components/sidebarSkeleton";
import TrackList from "./components/trackList";
import TrackListSkeleton from "./components/trackListSkeleton";

let loading = true;

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          {loading ? <TrackListSkeleton/> : <TrackList/>}
          {loading ? <SidebarSkeleton/> : <Sidebar/>}
        </main>
          {loading ? <AudioPlayerSkeleton/> : <AudioPlayer/>}
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
