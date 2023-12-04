import * as S from "../../styles.js";
import { useEffect, useState } from "react";
import AudioPlayer from "../../components/audioPlayer/audioPlayer.js";
import AudioPlayerSkeleton from "../../components/skeletons/audioPlayerSkeleton";
import NavMenu from "../../components/navMenu/navMenu.js";
import loadingDelay from "../../components/loading";

export const FavoritesPage = () => {
  // Псевдозагрузка
  const [load, setLoad] = useState(true);
  useEffect(() => {
    loadingDelay(load, setLoad, 2000);
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
        </S.Main>
        {load ? <AudioPlayerSkeleton /> : <AudioPlayer />}
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  );
};
