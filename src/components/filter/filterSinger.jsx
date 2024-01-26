import * as S from "./styles.js";
import SingerPopUp from "../filterPopUps/singerPopUp.jsx";

export default function FilterSinger({ isActive, onShow, onHide, arr, setPlaylist}) {
  return (
    <S.FilterButtonContainer>
      {isActive ? (
        <S.FilterButtonActive onClick={isActive ? onHide : onShow}>
          исполнителю
        </S.FilterButtonActive>
      ) : (
        <S.FilterButton onClick={isActive ? onHide : onShow}>
          исполнителю
        </S.FilterButton>
      )}
      {isActive ? <SingerPopUp arr={arr} setPlaylist={setPlaylist}/> : ""}
    </S.FilterButtonContainer>
  );
}
