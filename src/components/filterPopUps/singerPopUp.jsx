import getUnicItems from "../getUnicItems"; // Принимает массив повторяющихся значений, возвращает массив уникальных значений
import * as S from "./styles";
import { useEffect } from "react";

export default function SingerPopUp({
  arr,
  conditionAuthor,
  setConditionAuthor,
  counter,
  setCounter,
}) {
  // Массив уникальных исполнителе из arr
  const allSingers = [arr.map((item) => item.author)];
  const Items = getUnicItems(allSingers[0]).map((item) => (
    <S.FilterPopUpItem
      key={getUnicItems(allSingers[0]).indexOf(item)}
      onClick={() => conditionAuthorAction(item)}
      // Здесь должен быть пропс для стилизации
    >
      {item}
    </S.FilterPopUpItem>
  ));

  // Функция для манипуляций с conditionAuthor
  const conditionAuthorAction = (item) => {
    // Если в conditionAuthor уже есть item
    if (conditionAuthor.includes(item)) {
      // Отфильруем conditionAuthor, оставив всё, кроме item
      setConditionAuthor(conditionAuthor.filter((a) => a != item));
      // Уменьшим счетчик
      setCounter(counter - 1);
    } else {
      // Иначе добавим item в conditionAuthor
      setConditionAuthor([...conditionAuthor, item]);
      // Увеличим счетчик
      setCounter(counter + 1);
    }
  };

  return (
    <S.WrapperPopUp>
      <S.FilterPopUp>
        <S.FilterPopUpList>{Items}</S.FilterPopUpList>
      </S.FilterPopUp>
    </S.WrapperPopUp>
  );
}
