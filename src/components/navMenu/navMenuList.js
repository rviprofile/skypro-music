import * as S from "./styles.js";
import './styles.css'
import React from "react";
import { Link } from "react-router-dom";

export default function NavMenuList() {
  return (
    <S.NavMenuList>
      <S.MenuList>
        <S.MenuItem>
          <Link className="MenuLink" to="/">Главное</Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link className="MenuLink" to="/favorites">Мой плейлист</Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link className="MenuLink" to="/login">Войти</Link>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenuList>
  );
}
