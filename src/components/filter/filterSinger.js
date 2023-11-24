import * as S from "./styles.js";
import SingerPopUp from "../filterPopUps/singerPopUp";

export default function FilterSinger({ isActive, onShow, onHide }) {
  return (
    <S.FilterButtonContainer>
      {isActive ? (
        <S.FilterButtonHover onClick={isActive ? onHide : onShow}>
          исполнителю
        </S.FilterButtonHover>
      ) : (
        <S.FilterButton onClick={isActive ? onHide : onShow}>
          исполнителю
        </S.FilterButton>
      )}
      {isActive ? <SingerPopUp /> : ""}
    </S.FilterButtonContainer>
  );
}
