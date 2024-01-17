import * as S from "./styles";
import { store } from "../../store/store";
import { useState } from "react";
import { changePlaylistCreator } from "../../store/actions/creators/activeTrack";

export default function YearPopUp() {

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
    console.log({...sortedPlaylist});
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
    console.log({...sortedPlaylist});
  };
  const sortOriginal = () => {
    console.log(backupActivePlaylist);
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
