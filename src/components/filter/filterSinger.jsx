import * as S from "./styles.js";
import SingerPopUp from "../filterPopUps/singerPopUp.jsx";
import { useState } from "react";

export default function FilterSinger({
  isActive,
  onShow,
  onHide,
  arr,
  conditionAuthor,
  setConditionAuthor,
}) {

  // Локальное состояние с собственным счетчиком выбранных пунктов
  const [counter, setCounter] = useState(0)

  return (
    <S.FilterButtonContainer>
      {counter > 0 ? <S.Counter>{counter}</S.Counter> : ""}
      {isActive ? (
        <S.FilterButtonActive onClick={isActive ? onHide : onShow}>
          исполнителю
        </S.FilterButtonActive>
      ) : (
        <S.FilterButton onClick={isActive ? onHide : onShow}>
          исполнителю
        </S.FilterButton>
      )}
      {isActive ? (
        <SingerPopUp
          arr={arr}
          conditionAuthor={conditionAuthor}
          setConditionAuthor={setConditionAuthor}
          counter={counter}
          setCounter={setCounter}
        />
      ) : (
        ""
      )}
    </S.FilterButtonContainer>
  );
}
