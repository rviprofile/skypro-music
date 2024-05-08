import * as S from "./styles";

export default function Search({ arr, setPlaylist, search, setSearch }) {
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
