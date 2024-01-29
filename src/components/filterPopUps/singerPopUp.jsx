import getUnicItems from "../getUnicItems"; // Принимает массив повторяющихся значений, возвращает массив уникальных значений
import * as S from "./styles";
import { changePlaylistCreator } from "../../store/actions/creators/activeTrack";

export default function SingerPopUp({arr, setPlaylist, setCounter}) {
  const allSingers = [arr.map((item) => item.author)];
  const Items = getUnicItems(allSingers[0]).map((item) => (
    <S.FilterPopUpItem key={getUnicItems(allSingers[0]).indexOf(item)}>{item}</S.FilterPopUpItem>
  ))
  return (
    <S.WrapperPopUp>
      <S.FilterPopUp>
        <S.FilterPopUpList>
{Items}
        </S.FilterPopUpList>
      </S.FilterPopUp>
    </S.WrapperPopUp>
  );
}

