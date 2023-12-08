import React from "react";
import * as S from "./styles.js"
import { AppRoutes } from "./routes.jsx";

function App() {
  return (
    <>
    <S.GlobalStyle />
    <AppRoutes/>
    </>
  );
}

export default App;
