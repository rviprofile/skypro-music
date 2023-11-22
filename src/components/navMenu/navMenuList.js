import * as S from "./styles.js";
import React from "react";

export default function NavMenuList() {
  return (
    <S.NavMenuList>
      <S.MenuList>
        <S.MenuItem>
          <S.MenuLink href="#">Главное</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink href="#">Мой плейлист</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink href="../signin.html">Войти</S.MenuLink>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenuList>
  );
}
