import * as S from "./styles.js";
import GenrePopUp from "../filterPopUps/genrePopUp";

export default function FilterGenre({ isActive, onShow, onHide }) {
  return (
    <S.FilterButtonContainer>
      <div
        className={
          isActive
            ? "filter__button button-author _btn-text _btn-text__hover"
            : "filter__button button-author _btn-text"
        }
        onClick={isActive ? onHide : onShow}
      >
        жанру
      </div>
      {isActive ? <GenrePopUp /> : ""}
    </S.FilterButtonContainer>
  );
}
