import * as S from "./styles.js";
import GenrePopUp from "../filterPopUps/genrePopUp";

export default function FilterGenre({ isActive, onShow, onHide }) {
  return (
    <S.FilterButtonContainer>
      {isActive ? (
        <S.FilterButtonActive onClick={isActive ? onHide : onShow}>
          жанру
        </S.FilterButtonActive>
      ) : (
        <S.FilterButton onClick={isActive ? onHide : onShow}>
          жанру
        </S.FilterButton>
      )}
      {isActive ? <GenrePopUp /> : ""}
    </S.FilterButtonContainer>
  );
}
