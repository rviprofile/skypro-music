import { Outlet } from "react-router-dom";
import AudioPlayer from "./audioPlayer/audioPlayer";
import * as S from "./../styles.js";
import NavMenu from "./../components/navMenu/navMenu.jsx";
import Sidebar from "./sidebar/sidebar.jsx";
import getAccessToken from "./API/getAccessToken.js";

export default function Layout() {
  // Обновляем access токен в Cookie каждые 200 секунд
  setInterval(() => getAccessToken(), 200000);

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
