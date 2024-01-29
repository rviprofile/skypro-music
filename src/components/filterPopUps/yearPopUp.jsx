import * as S from "./styles";
import { store } from "../../store/store";
import { useState } from "react";

export default function YearPopUp({arr, setPlaylist, setCounter}) {

  // Состояния с активным плейлистом
  const [backupActivePlaylist, setBackupActivePlaylist] = useState();

  const sortNewest = () => {
    const arr = []
    const actualPlaylist = store.getState().playlistStore.playlistReducer;
    setBackupActivePlaylist(actualPlaylist)
    for (const item of Object.entries(actualPlaylist)) {
      arr.push(item[1]);
    }
    const sortedPlaylist = arr.sort(
      function (a,b) {
        if (new Date(a.release_date).getTime() > new Date(b.release_date).getTime()) {
          return -1
        }
        if (new Date(a.release_date).getTime() < new Date(b.release_date).getTime()) {
          return 1
        }
        return 0
      }
    )
    console.log([sortedPlaylist][0]);
    setPlaylist([sortedPlaylist][0])
  };
  const sortOldest = () => {
    const arr = []
    const actualPlaylist = store.getState().playlistStore.playlistReducer;
    setBackupActivePlaylist(actualPlaylist)
    for (const item of Object.entries(actualPlaylist)) {
      arr.push(item[1]);
    }
    const sortedPlaylist = arr.sort(
      function (a,b) {
        if (new Date(a.release_date).getTime() > new Date(b.release_date).getTime()) {
          return 1
        }
        if (new Date(a.release_date).getTime() < new Date(b.release_date).getTime()) {
          return -1
        }
        return 0
      }
    )
    console.log([sortedPlaylist][0]);
    setPlaylist([sortedPlaylist][0])
  };
  const sortOriginal = () => {
    console.log(backupActivePlaylist);
    setPlaylist(backupActivePlaylist)
  };
  return (
    <S.SmallPopUp>
      <S.FilterPopUpList>
        <S.FilterPopUpItem onClick={sortOriginal}>
          По умолчанию
        </S.FilterPopUpItem>
        <S.FilterPopUpItem onClick={sortNewest}>
          Сначала новые
        </S.FilterPopUpItem>
        <S.FilterPopUpItem onClick={sortOldest}>
          Сначала старые
        </S.FilterPopUpItem>
      </S.FilterPopUpList>
    </S.SmallPopUp>
  );
}
