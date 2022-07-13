import React from "react";
import style from "./styles.module.scss";
import img from "../../../assets/icons/burger.svg";
import LazyLoad from "react-lazy-load";

function Burger() {
  return (
    <div>
      <div className={style.catalog}>
        <div className={style.svg}>
          <LazyLoad>
            <img src={img}></img>
          </LazyLoad>
        </div>
        <div className={style.text}>Каталог</div>
      </div>
    </div>
  );
}

export default Burger;
