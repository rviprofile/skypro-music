import YearPopUp from "./filterPopUps/yearPopUp";

export default function FilterYear({ isActive, onShow, onHide }) {
  return (
    <div className="filter__button_container">
      <div
        className={isActive ? "filter__button button-author _btn-text _btn-text__hover" : "filter__button button-author _btn-text"}
        onClick={isActive ? onHide : onShow}
      >
        году выпуска
      </div>
      {isActive ? <YearPopUp /> : ""}
    </div>
  );
}
