import "./App.css";
import AudioPlayer from "./components/audioPlayer";
import NavMenu from "./components/navMenu";
import Sidebar from "./components/sidebar";
import TrackList from "./components/trackList";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <TrackList/>
          <Sidebar/>
        </main>
        <AudioPlayer />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
