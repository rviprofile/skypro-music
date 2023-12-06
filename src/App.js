import React from "react";
import * as S from "./styles.js"
import { AppRoutes } from "./routes.jsx";

const user = document.cookie
console.log(user);

function App() {
  return (
    <>
    <S.GlobalStyle />
    <AppRoutes user={user} />
    </>
  );
}

export default App;
