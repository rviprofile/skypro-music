import { useEffect, useState } from "react";
import * as S from "./styles";
import getAllTracks from "../API/getAllTracks";

export default function Search({ arr, setPlaylist }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Создаем массив, с будущими совпадениями в поиске
    let newArr = [];
    if (arr) {
      // Наполняем массив каждым элементом arr
      newArr.push(
        // где строка "названиеавторальбом" содержит "поиск"
        arr.filter((item) =>
          `${item.name}${item.author}${item.album}`
            .replace(/\s/g, "")
            .toLowerCase()
            .includes(search.toLowerCase())
        )
      );
      setPlaylist(newArr[0])
    }
  }, [search]);

  return (
    <S.CenterblockSearh>
      <S.SearchSvg>
        <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={(event) => setSearch(event.target.value)}
      />
    </S.CenterblockSearh>
  );
}
