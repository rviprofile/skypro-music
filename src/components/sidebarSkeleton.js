import React from "react";
export default function SidebarSkeleton() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <img src="/img/skeleton/250x150.svg"></img>
          </div>
          <div className="sidebar__item">
          <img src="/img/skeleton/250x150.svg"></img>
          </div>
          <div className="sidebar__item">
          <img src="/img/skeleton/250x150.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
