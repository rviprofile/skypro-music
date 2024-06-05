import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";
import React from "react";
import { deleteCookie } from "../setCookie.js";
import { useUserContext } from "../context/userContext.js";
import { store } from "../../store/store.js";
import { chahgeCategoryCreator } from "../../store/actions/creators/activeTrack.js";

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
            <Link to="/category/1" onClick={() => {store.dispatch(chahgeCategoryCreator(1))}}>
              <S.SidebarLink>
              <S.SideBarText>Классическая музыка</S.SideBarText>
                <S.SidebarImg
                  className="sidebar__img"
                  src="/img/Frame3.png"
                  alt="day's playlist"
                />
              </S.SidebarLink>
            </Link>
          </S.SidebarItem>
          <S.SidebarItem>
            <Link to="/category/2" onClick={() => {store.dispatch(chahgeCategoryCreator(2))}}>
              <S.SidebarLink>
              <S.SideBarText>Электронная музыка</S.SideBarText>
                <S.SidebarImg
                  className="sidebar__img"
                  src="/img/Frame4.png"
                  alt="day's playlist"
                />
              </S.SidebarLink>
            </Link>
          </S.SidebarItem>
          <S.SidebarItem>
            <Link to="/category/3" onClick={() => {store.dispatch(chahgeCategoryCreator(3))}}>
              <S.SidebarLink>
              <S.SideBarText>Рок музыка</S.SideBarText>
                <S.SidebarImg
                  className="sidebar__img"
                  src="/img/Frame5.png"
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
