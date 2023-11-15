import YearPopUp from "./filterPopUps/yearPopUp";

export default function FilterYear({ isActive, onShow, onHide }) {
  return (
    <div className="filter__button_container">
      <div
        className="filter__button button-year _btn-text"
        onClick={isActive ? onHide : onShow}
      >
        году выпуска
      </div>
      {isActive ? <YearPopUp /> : ""}
    </div>
  );
}
