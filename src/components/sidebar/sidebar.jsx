import { Link } from "react-router-dom";
import * as S from "./styles";
import React from "react";
export default function Sidebar() {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
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
