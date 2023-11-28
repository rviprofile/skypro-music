import NotFoundError from "../../components/notFound/notFound.js";
import * as S from "../../styles.js";
import NavMenu from "../../components/navMenu/navMenu.js";
import AudioPlayerSkeleton from "../../components/skeletons/audioPlayerSkeleton";

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
