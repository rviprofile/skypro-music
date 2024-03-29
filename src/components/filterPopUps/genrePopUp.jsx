import * as S from "./styles";
import getUnicItems from "../getUnicItems"; // Принимает массив повторяющихся значений, возвращает массив уникальных значений
import { changePlaylistCreator } from "../../store/actions/creators/activeTrack";

export default function GenrePopUp({arr, setPlaylist}) {
  const allGenres = [arr.map((item) => item.genre)]; // Все "жанры" из API
  const Items = getUnicItems(allGenres[0]).map((item) => (
    <S.FilterPopUpItem key={getUnicItems(allGenres[0]).indexOf(item)}>{item}</S.FilterPopUpItem>
  ))
  return (
    <S.WrapperPopUp>
      <S.FilterPopUp>
        <S.FilterPopUpList>{Items}</S.FilterPopUpList>
      </S.FilterPopUp>
    </S.WrapperPopUp>
  );
}
