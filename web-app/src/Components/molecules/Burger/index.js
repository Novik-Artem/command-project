import React from "react";
import style from "./styles.module.scss";
import img from "../../../assets/icons/burger.svg";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

function Burger() {
  return (
    <div>
      <Link to="/cards-page" className={style.catalog}>
        <div className={style.svg}>
          <LazyLoad>
            <img src={img}></img>
          </LazyLoad>
        </div>
        <div className={style.text}>Каталог</div>
      </Link>
    </div>
  );
}

export default Burger;
