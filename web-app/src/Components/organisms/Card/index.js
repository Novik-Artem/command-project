import React from "react";
import style from "./styles.module.scss";
import img from "../../../assets/images/card.webp";
import LazyLoad from "react-lazy-load";
import { useSelector } from "react-redux";


function Card() {
  const cardinfo = useSelector((state) => state.cardinfo.name);
  return (
    <div>
      <div className={style.card}>
        <div className={style.image}>
          <LazyLoad>
            <img src={img}></img>
          </LazyLoad>
        </div>
        <div className={style.content}>
          <div className={style.status}>живой</div>
          <div className={style.name}>{state.cardinfo.name}</div>
          <div className={style.data}>23.11.2001</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
