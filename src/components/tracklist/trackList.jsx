import * as S from "./styles.js";
import Filter from "../filter/filter.jsx";
import PlaylistContent from "../playlist/playlistContent.jsx";
import PlaylistTitle from "../playlist/playlistTitle.jsx";
import Search from "../search/search.jsx";
import { useEffect, useState } from "react";
import { changePlaylistCreator } from "../../store/actions/creators/activeTrack.js";
import { store } from "../../store/store.js";

export default function TrackList({ tracks, error, title }) {
  // Локальное состояние с активным списком треков и функцией, которая его меняет
  const [playlist, setPlaylist] = useState(tracks);

  // Все три фильтра обновляют состояния - массивы с условиями фильтрации
  const [conditionAuthor, setConditionAuthor] = useState([]);
  const [conditionGenre, setConditionGenre] = useState([]);
  const [conditionYear, setConditionYear] = useState("По умолчанию");

  // Поднятое состояние из поиска
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Создаем новый массив
    let newTracks = tracks;

    // Если выбран фильтр по жанру
    if (conditionGenre.length > 0) {
      console.log(`Фильтр по жанру: ${conditionGenre.length}`);
      newTracks = newTracks.filter((item) =>
        conditionGenre.includes(item.genre)
      );
    }

    // Если выбран фильтр по автору
    if (conditionAuthor.length > 0) {
      console.log(`Фильтр по автору: ${conditionAuthor.length}`);
      newTracks = newTracks.filter((item) =>
        conditionAuthor.includes(item.author)
      );
    }

    // Если есть строка поиска
    if (search.length > 0) {
      newTracks = newTracks.filter((item) =>
        `${item.name}${item.author}${item.album}`
          .replace(/\s/g, "")
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // Если выбрана сортировка по дате
    if (conditionYear === "Сначала новые") {
      console.log("Сортировка : Сначала новые");
      setPlaylist(
        newTracks.toSorted(function (a, b) {
          if (
            new Date(a.release_date).getTime() >
            new Date(b.release_date).getTime()
          ) {
            return -1;
          }
          if (
            new Date(a.release_date).getTime() <
            new Date(b.release_date).getTime()
          ) {
            return 1;
          }
          return 0;
        })
      );
    }
    if (conditionYear === "Сначала старые") {
      console.log("Сортировка : Сначала старые");
      setPlaylist(
        newTracks.toSorted(function (a, b) {
          if (
            new Date(a.release_date).getTime() >
            new Date(b.release_date).getTime()
          ) {
            return 1;
          }
          if (
            new Date(a.release_date).getTime() <
            new Date(b.release_date).getTime()
          ) {
            return -1;
          }
          return 0;
        })
      );
    }
    if (conditionYear === "По умолчанию") {
      console.log("Сортировка : По умолчанию");
      setPlaylist(newTracks);
    }

    store.dispatch(changePlaylistCreator(newTracks));
  }, [tracks, conditionAuthor, conditionGenre, conditionYear, search]);

  return (
    <S.MainCenterblock>
      <Search
        arr={playlist}
        setPlaylist={setPlaylist}
        search={search}
        setSearch={setSearch}
      />
      {error ? (
        <S.ErrorH2>Не удалось загрузить плейлист, попробуйте позже</S.ErrorH2>
      ) : (
        <S.CenterblockH2>{title}</S.CenterblockH2>
      )}
      <Filter
        arr={tracks}
        conditionAuthor={conditionAuthor}
        setConditionAuthor={setConditionAuthor}
        conditionGenre={conditionGenre}
        setConditionGenre={setConditionGenre}
        conditionYear={conditionYear}
        setConditionYear={setConditionYear}
      />
      <S.CenterblockContent>
        <PlaylistTitle />
        <PlaylistContent arr={playlist} />
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}
