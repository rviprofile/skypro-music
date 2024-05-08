import * as S from "./styles.js";
import { useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import FilterGenre from "./filterGenre.jsx";
import FilterSinger from "./filterSinger.jsx";
import FilterYear from "./filterYear.jsx";

export default function Filter({
  arr,
  conditionAuthor,
  setConditionAuthor,
  conditionGenre,
  setConditionGenre,
  conditionYear,
  setConditionYear,
}) {

  // Состояние с индексом активного фильтра
  const [activeIndex, setActiveIndex] = useState(0);

  // Клик в любом месте экрана закрывает фильтр
  const ref = useClickAway(() => {
    setActiveIndex(0);
  });

  return (
    <S.CenterBlockFilter ref={ref}>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <FilterSinger
        arr={arr}
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
        onHide={() => setActiveIndex(0)}
        conditionAuthor={conditionAuthor}
        setConditionAuthor={setConditionAuthor}
      />
      <FilterYear
        arr={arr}
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
        onHide={() => setActiveIndex(0)}
        conditionYear={conditionYear}
        setConditionYear={setConditionYear}
      />
      <FilterGenre
        arr={arr}
        isActive={activeIndex === 3}
        onShow={() => setActiveIndex(3)}
        onHide={() => setActiveIndex(0)}
        conditionGenre={conditionGenre}
        setConditionGenre={setConditionGenre}
      />
    </S.CenterBlockFilter>
  );
}
