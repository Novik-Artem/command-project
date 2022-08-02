import React from "react";
import style from "./styles.module.scss";
import LazyLoad from "react-lazy-load";
import firstImage from "../../../assets/icons/firstStyleCards.svg";
import secondImage from "../../../assets/icons/secondStyleCards.svg";

function CardHead() {
  return (
    <div className={style.wrapper}>
      <div className={style.text}>Каталог</div>
      <div className={style.buttons}>
        <div className={style.button}>
          <LazyLoad className={style.image}>
            <img src={firstImage}></img>
          </LazyLoad>
        </div>
        <div className={style.button}>
          <LazyLoad className={style.image}>
            <img src={secondImage}></img>
          </LazyLoad>
        </div>
      </div>
    </div>
  );
}

export default CardHead;
