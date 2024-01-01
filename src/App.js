import React from "react";
import * as S from "./styles.js";
import { AppRoutes } from "./routes.jsx";
import { useState } from "react";
import { UserContext } from "./components/context/userContext.js";
import { getCookie } from "./components/setCookie.js";

function App() {
  const userFromCookie = {
    id: getCookie("id"),
    username: getCookie("name")
  }
  // Активация аудиоплеера и трека внутри
  const [activePlayer, setActivePlayer] = useState(null);
  
  // Данные вошедшего пользователя
  const [currentUser, setCurrentUser] = useState(userFromCookie);
  
  // Функция для передачи данных
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
