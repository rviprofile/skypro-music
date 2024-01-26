import * as S from "./styles.js"
import YearPopUp from "../filterPopUps/yearPopUp.jsx";

export default function FilterYear({ isActive, onShow, onHide, arr, setPlaylist}) {
  return (
    <S.FilterButtonContainer>
      {isActive ? (
        <S.FilterButtonActive onClick={isActive ? onHide : onShow}>
          году выпуска
        </S.FilterButtonActive>
      ) : (
        <S.FilterButton onClick={isActive ? onHide : onShow}>
          году выпуска
        </S.FilterButton>
      )}
      {isActive ? <YearPopUp arr={arr} setPlaylist={setPlaylist}/> : ""}
    </S.FilterButtonContainer>
  );
}
