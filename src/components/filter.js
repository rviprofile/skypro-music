import { useEffect, useState } from "react";
import FilterGenre from "./filterGenre";
import FilterSinger from "./filterSinger";
import FilterYear from "./filterYear";

export default function Filter() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <FilterSinger
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
        onHide={() => setActiveIndex(0)}
      />
      <FilterYear
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
        onHide={() => setActiveIndex(0)}
      />
      <FilterGenre
        isActive={activeIndex === 3}
        onShow={() => setActiveIndex(3)}
        onHide={() => setActiveIndex(0)}
      />
    </div>
  );
}
