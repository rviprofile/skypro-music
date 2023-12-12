import * as S from "./styles";

export default function YearPopUp() {
  return (
    <S.SmallPopUp>
      <S.FilterPopUpList>
        <S.FilterPopUpItem>По умолчанию</S.FilterPopUpItem>
        <S.FilterPopUpItem>Сначала новые</S.FilterPopUpItem>
        <S.FilterPopUpItem>Сначала старые</S.FilterPopUpItem>
      </S.FilterPopUpList>
    </S.SmallPopUp>
  );
}
