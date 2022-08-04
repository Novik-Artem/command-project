import React from "react";
import style from "./styles.module.scss";
import img from "../../../assets/icons/burger.svg";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

function Burger() {
  return (
    <Link to="/catalog" className={style.catalog}>
      <LazyLoad>
        <img src={img}></img>
      </LazyLoad>
      <div className={style.text}>Каталог</div>
    </Link>
  );
}

export default Burger;
