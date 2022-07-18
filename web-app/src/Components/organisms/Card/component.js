import React from "react";
import style from "./styles.module.scss";
import img from "../../../assets/images/card.webp";
import LazyLoad from "react-lazy-load";

const Card = ({ name, data, number, setN }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <div className={style.image}>
          <LazyLoad>
            <img src={img}></img>
          </LazyLoad>
        </div>
        <div className={style.content}>
          <div className={style.status} onClick={() => setN()}>
            живой
          </div>
          <div className={style.name}>{number}</div>
          <div className={style.data}>{data}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
