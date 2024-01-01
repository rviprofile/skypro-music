import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";
import React from "react";
import { deleteCookie } from "../setCookie.js";
import { useUserContext } from "../context/userContext.js";

export default function Sidebar() {

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
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{userContext.user.username}</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout" onClick={Escape}>
            <use xlinkHref="/img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            <Link to="/category/1">
              <S.SidebarLink>
                <S.SidebarImg
                  className="sidebar__img"
                  src="/img/playlist01.png"
                  alt="day's playlist"
                />
              </S.SidebarLink>
            </Link>
          </S.SidebarItem>
          <S.SidebarItem>
            <Link to="/category/2">
              <S.SidebarLink>
                <S.SidebarImg
                  className="sidebar__img"
                  src="/img/playlist02.png"
                  alt="day's playlist"
                />
              </S.SidebarLink>
            </Link>
          </S.SidebarItem>
          <S.SidebarItem>
            <Link to="/category/3">
              <S.SidebarLink>
                <S.SidebarImg
                  className="sidebar__img"
                  src="/img/playlist03.png"
                  alt="day's playlist"
                />
              </S.SidebarLink>
            </Link>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
