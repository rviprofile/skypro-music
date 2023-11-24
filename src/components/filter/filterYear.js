import * as S from "./styles.js"
import YearPopUp from "../filterPopUps/yearPopUp";

export default function FilterYear({ isActive, onShow, onHide }) {
  return (
    <S.FilterButtonContainer>
      {isActive ? (
        <S.FilterButtonHover onClick={isActive ? onHide : onShow}>
          году выпуска
        </S.FilterButtonHover>
      ) : (
        <S.FilterButton onClick={isActive ? onHide : onShow}>
          году выпуска
        </S.FilterButton>
      )}
      {isActive ? <YearPopUp /> : ""}
    </S.FilterButtonContainer>
  );
}
