import React from "react";
import style from "./styles.module.scss";
import Logo from "../../atoms/Logo/index";
import Burger from "../../molecules/Burger/index";

function Header() {
  return (
    <div className={style.header}>
      <Logo />
      <Burger />
    </div>
  );
}

export default Header;
