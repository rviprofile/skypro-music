import * as S from "./styles.js";
import "./styles.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteCookie } from "../setCookie.js";
import { useUserContext } from "../context/userContext.js";

export default function NavMenuList() {
  const userContext = useUserContext();
  const navigate = useNavigate();
  const Escape = (e) => {
    e.preventDefault();
    deleteCookie("token");
    deleteCookie("name");
    deleteCookie("id");
    userContext.toggleUser(null)
    navigate("/login");
  };
  return (
    <S.NavMenuList>
      <S.MenuList>
        <S.MenuItem>
          <Link className="MenuLink" to="/">
            Главное
          </Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link className="MenuLink" to="/favorites">
            Мой плейлист
          </Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link className="MenuLink" to="/login" onClick={Escape}>
            Выйти
          </Link>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenuList>
  );
}
