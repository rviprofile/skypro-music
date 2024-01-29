import * as S from "./styles.js";
import YearPopUp from "../filterPopUps/yearPopUp.jsx";
import { useState } from "react";

export default function FilterYear({
  isActive,
  onShow,
  onHide,
  arr,
  setPlaylist,
}) {
  const [counter, setCounter] = useState(0);
  return (
    <S.FilterButtonContainer>
      {counter > 0 ? <S.Counter>{counter}</S.Counter> : ''}
      {isActive ? (
        <S.FilterButtonActive onClick={isActive ? onHide : onShow}>
          году выпуска
        </S.FilterButtonActive>
      ) : (
        <S.FilterButton onClick={isActive ? onHide : onShow}>
          году выпуска
        </S.FilterButton>
      )}
      {isActive ? <YearPopUp arr={arr} setPlaylist={setPlaylist} /> : ""}
    </S.FilterButtonContainer>
  );
}
