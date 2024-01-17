import { Outlet } from "react-router-dom";
import AudioPlayer from "./audioPlayer/audioPlayer";

export default function Layout() {
  return (
    <>
      <Outlet />
      <AudioPlayer />
    </>
  );
}
