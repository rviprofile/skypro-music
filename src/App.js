import React from "react";
import * as S from "./styles.js"
import { AppRoutes } from "./routes.jsx";
import { useState } from "react";

function App() {

    // Активация аудиоплеера и трека внутри
    const [activePlayer, setActivePlayer] = useState(null);

  return (
    <>
    <S.GlobalStyle />
    <AppRoutes activePlayer={activePlayer} setActivePlayer={setActivePlayer}/>
    </>
  );
}

export default App;
