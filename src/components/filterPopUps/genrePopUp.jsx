import getUnicItems from "../getUnicItems"; // Принимает массив повторяющихся значений, возвращает массив уникальных значений
import * as S from "./styles";
import { useEffect } from "react";

export default function GenrePopUp({
  arr,
  conditionGenre,
  setConditionGenre,
  counter,
  setCounter,
}) {

  // Массив уникальных жанров из arr
  const allGenres = [arr.map((item) => item.genre)];
  const Items = getUnicItems(allGenres[0]).map((item) => (
    conditionGenre.includes(item) ? (
      <S.FilterPopUpItemActive
      key={getUnicItems(allGenres[0]).indexOf(item)}
      onClick={() => conditionGenreAction(item)}
    >
      {item}
    </S.FilterPopUpItemActive>
    ) : (
      <S.FilterPopUpItem
      key={getUnicItems(allGenres[0]).indexOf(item)}
      onClick={() => conditionGenreAction(item)}
    >
      {item}
    </S.FilterPopUpItem>
    )
  ));

  // Функция для манипуляций с conditionGenre
  const conditionGenreAction = (item) => {
    // Если в conditionGenre уже есть item
    if (conditionGenre.includes(item)) {
      // Отфильруем conditionGenre, оставив всё, кроме item
      setConditionGenre(conditionGenre.filter((a) => a != item));
      setCounter(counter - 1);
    } else {
      // Иначе добавим item в filters
      setConditionGenre([...conditionGenre, item]);
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
