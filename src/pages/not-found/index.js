import NotFoundError from "../../components/notFound/notFound.jsx";
import * as S from "../../styles.js";
import NavMenu from "../../components/navMenu/navMenu.jsx";
import AudioPlayerSkeleton from "../../components/skeletons/audioPlayerSkeleton.jsx";

export const NotFound = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <NotFoundError />
        </S.Main>
        <AudioPlayerSkeleton />
      </S.Container>
    </S.Wrapper>
  );
};
