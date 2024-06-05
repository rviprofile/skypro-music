import { Outlet } from "react-router-dom";
import AudioPlayer from "./audioPlayer/audioPlayer";
import * as S from "./../styles.js";
import NavMenu from "./../components/navMenu/navMenu.jsx";
import Sidebar from "./sidebar/sidebar.jsx";

export default function Layout() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <Outlet />
          <Sidebar />
          <AudioPlayer />
        </S.Main>
      </S.Container>
      <S.Footer />
    </S.Wrapper>
  );
}
