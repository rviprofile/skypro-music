import * as S from "./styles.js";
import NavMenuList from "./navMenuList";
import React from "react";
const { useState } = React;

export default function NavMenu() {
  const [visible, setVisible] = useState(true);
  const activeBurger = () => setVisible(!visible);
  return (
    <S.NavMenu>
      <S.NavLogo>
        <S.LogoImage src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={activeBurger}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {visible ? <NavMenuList /> : ""}
    </S.NavMenu>
  );
}
