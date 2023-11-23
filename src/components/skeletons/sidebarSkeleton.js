import * as S from "../sidebar/styles.js";

import React from "react";
export default function SidebarSkeleton() {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            <img src="/img/skeleton/250x150.svg"></img>
          </S.SidebarItem>
          <S.SidebarItem>
            <img src="/img/skeleton/250x150.svg"></img>
          </S.SidebarItem>
          <S.SidebarItem>
            <img src="/img/skeleton/250x150.svg"></img>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
