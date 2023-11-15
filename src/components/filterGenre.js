import GenrePopUp from "./filterPopUps/genrePopUp";

export default function FilterGenre({ isActive, onShow, onHide }) {
  return (
    <div className="filter__button_container">
      <div
        className="filter__button button-genre _btn-text"
        onClick={isActive ? onHide : onShow}
      >
        жанру
      </div>
      {isActive ? <GenrePopUp /> : ""}
    </div>
  );
}
