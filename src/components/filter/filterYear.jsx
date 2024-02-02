import * as S from "./styles.js";
import YearPopUp from "../filterPopUps/yearPopUp.jsx";
import { useState } from "react";

export default function FilterYear({
  isActive,
  onShow,
  onHide,
  arr,
  conditionYear,
  setConditionYear,
}) {
  // Локальное состояние с собственным счетчиком выбранных пунктов
  const [counter, setCounter] = useState(0);

  return (
    <S.FilterButtonContainer>
      {counter > 0 ? <S.Counter>{counter}</S.Counter> : ""}
      {isActive ? (
        <S.FilterButtonActive onClick={isActive ? onHide : onShow}>
          году выпуска
        </S.FilterButtonActive>
      ) : (
        <S.FilterButton onClick={isActive ? onHide : onShow}>
          году выпуска
        </S.FilterButton>
      )}
      {isActive ? (
        <YearPopUp
        arr={arr}
        conditionYear={conditionYear}
        setConditionYear={setConditionYear}
        counter={counter}
        setCounter={setCounter}
        />
      ) : (
        ""
      )}
    </S.FilterButtonContainer>
  );
}
