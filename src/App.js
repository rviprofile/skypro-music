import React from "react";
import * as S from "./styles.js";
import { AppRoutes } from "./routes.jsx";
import { useState } from "react";
import { UserContext } from "./components/context/userContext.js";

function App() {
  // Активация аудиоплеера и трека внутри
  const [activePlayer, setActivePlayer] = useState(null);

  const [currentUser, setCurrentUser] = useState(undefined);
  const toggleUser = (user) => {
    setCurrentUser(user);
  };

  return (
    <>
      <S.GlobalStyle />
      <UserContext.Provider
        value={{
          user: currentUser,
          toggleUser,
        }}
      >
        <AppRoutes
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
        />
      </UserContext.Provider>
    </>
  );
}

export default App;
