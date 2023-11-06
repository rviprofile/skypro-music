import NavMenuList from "./navMenuList";
import React from "react";
const { useState } = React;



export default function NavMenu() {
  const [visible, setVisible] = useState(true);
  const activeBurger = () => setVisible(!visible)
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger" onClick={activeBurger}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      {visible ? <NavMenuList /> : ''}
    </nav>
  );
}
