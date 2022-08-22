import React from "react";
import style from "./styles.module.scss";
import img from "../../../assets/icons/burger.svg";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Burger() {
  const location = useLocation();
  const activeButton =
    location.pathname === "/catalog" ? style.activeCatalog : style.catalog;
  return (
    <Link to="/catalog" className={activeButton} >
      <LazyLoad>
        <img src={img}></img>
      </LazyLoad>
      <div className={style.text}>Каталог</div>
    </Link>
  );
}

export default Burger;
