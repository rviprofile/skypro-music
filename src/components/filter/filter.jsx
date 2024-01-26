import * as S from "./styles.js";
import { useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import FilterGenre from "./filterGenre.jsx";
import FilterSinger from "./filterSinger.jsx";
import FilterYear from "./filterYear.jsx";

export default function Filter({ arr, setPlaylist }) {
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
        setPlaylist={setPlaylist}
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
        onHide={() => setActiveIndex(0)}
      />
      <FilterYear
        arr={arr}
        isActive={activeIndex === 2}
        setPlaylist={setPlaylist}
        onShow={() => setActiveIndex(2)}
        onHide={() => setActiveIndex(0)}
      />
      <FilterGenre
        arr={arr}
        setPlaylist={setPlaylist}
        isActive={activeIndex === 3}
        onShow={() => setActiveIndex(3)}
        onHide={() => setActiveIndex(0)}
      />
    </S.CenterBlockFilter>
  );
}
