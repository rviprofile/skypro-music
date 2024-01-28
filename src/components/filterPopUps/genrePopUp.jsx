import * as S from "./styles";
import getUnicItems from "../getUnicItems"; // Принимает массив повторяющихся значений, возвращает массив уникальных значений
import { changePlaylistCreator } from "../../store/actions/creators/activeTrack";
import { Link } from "react-router-dom";

export default function GenrePopUp({arr, setPlaylist}) {
  const allGenres = [arr.map((item) => item.genre)]; // Все "жанры" из API
  const Items = getUnicItems(allGenres[0]).map((item) => (
    <S.FilterPopUpItem key={getUnicItems(allGenres[0]).indexOf(item)}>{item}</S.FilterPopUpItem>
  ))
  return (
    <S.WrapperPopUp>
      <S.FilterPopUp>
        {/* <S.FilterPopUpList>{Items}</S.FilterPopUpList> */}
        <S.FilterPopUpList>
        <Link to="/category/1"><S.FilterPopUpItem key="1">Классическая музыка</S.FilterPopUpItem></Link>
        <Link to="/category/2"><S.FilterPopUpItem key="2">Электронная музыка</S.FilterPopUpItem></Link>
        <Link to="/category/3"><S.FilterPopUpItem key="3">Рок музыка</S.FilterPopUpItem></Link>
        </S.FilterPopUpList>
      </S.FilterPopUp>
    </S.WrapperPopUp>
  );
}
