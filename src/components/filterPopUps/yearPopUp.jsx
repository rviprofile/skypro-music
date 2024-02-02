import * as S from "./styles";
import { useState } from "react";

export default function YearPopUp({
  arr,
  setPlaylist,
  conditionYear,
  setConditionYear,
  counter,
  setCounter,
}) {
  // Функция для манипуляций с conditionAuthor
  const conditionYearAction = (item) => {
    // Если в conditionYear уже есть item
    if (conditionYear.includes(item)) {
      // Сортировка будет по умолчанию
      setConditionYear("По умолчанию");
      // Обновим счетчик
      setCounter(0);
    } else {
      // Иначе меняем единственное значение conditionYear на item
      setConditionYear(item);
      // Обновим счетчик
      setCounter(1);
    }
  };

  // const sortNewest = () => {
  //   // const arr = []
  //   const actualPlaylist = arr;
  //   setBackupActivePlaylist([actualPlaylist]);
  //   for (const item of Object.entries(actualPlaylist)) {
  //     arr.push(item[1]);
  //   }
  //   const sortedPlaylist = arr.sort(function (a, b) {
  //     if (
  //       new Date(a.release_date).getTime() > new Date(b.release_date).getTime()
  //     ) {
  //       return -1;
  //     }
  //     if (
  //       new Date(a.release_date).getTime() < new Date(b.release_date).getTime()
  //     ) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   console.log(sortedPlaylist);
  //   // setPlaylist([sortedPlaylist])
  // };
  // const sortOldest = () => {
  //   // const arr = []
  //   // const actualPlaylist = store.getState().playlistStore.playlistReducer;
  //   const actualPlaylist = arr;
  //   setBackupActivePlaylist([actualPlaylist]);
  //   for (const item of Object.entries(actualPlaylist)) {
  //     arr.push(item[1]);
  //   }
  //   const sortedPlaylist = arr.sort(function (a, b) {
  //     if (
  //       new Date(a.release_date).getTime() > new Date(b.release_date).getTime()
  //     ) {
  //       return 1;
  //     }
  //     if (
  //       new Date(a.release_date).getTime() < new Date(b.release_date).getTime()
  //     ) {
  //       return -1;
  //     }
  //     return 0;
  //   });
  //   console.log([sortedPlaylist][0]);
  //   setPlaylist([sortedPlaylist][0]);
  // };
  // const sortOriginal = () => {
  //   resetFilters();
  // };

  return (
    <S.SmallPopUp>
      <S.FilterPopUpList>
        <S.FilterPopUpItem onClick={() => conditionYearAction("По умолчанию")}>
          По умолчанию
        </S.FilterPopUpItem>
        <S.FilterPopUpItem onClick={() => conditionYearAction("Сначала новые")}>
          Сначала новые
        </S.FilterPopUpItem>
        <S.FilterPopUpItem
          onClick={() => conditionYearAction("Сначала старые")}
        >
          Сначала старые
        </S.FilterPopUpItem>
      </S.FilterPopUpList>
    </S.SmallPopUp>
  );
}
