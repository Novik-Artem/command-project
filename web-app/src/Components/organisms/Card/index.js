import React from "react";
import style from "./styles.module.scss";
import LazyLoad from "react-lazy-load";

const Card = ({ char_id, img, name, birthday, status}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <div className={style.image}>
          <LazyLoad>
            <img src={img}/>
          </LazyLoad>
        </div>
        <div className={style.content}>
          <div className={style.status}>
            {status}
          </div>
          <div className={style.name}>{name}</div>
          <div className={style.data}>{birthday}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
