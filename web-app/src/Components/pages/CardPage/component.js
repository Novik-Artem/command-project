import React from "react";
import style from "./styles.module.scss";
import LazyLoad from "react-lazy-load";
import arrow from "../../../assets/icons/leftArrow.svg";
import { Link } from "react-router-dom";
import Loader from "../../atoms/Loader";

function CardPage({ img, name, birthday, nickname, status, loader, quotes }) {
  return loader ? (
    <Loader />
  ) : (
    <div className={style.wrapper}>
      <Link to="/catalog" className={style.button}>
        <div className={style.imageButton}>
          <LazyLoad>
            <img src={arrow} />
          </LazyLoad>
        </div>
        <div className={style.text}>Назад в Каталог</div>
      </Link>
      <div className={style.card}>
        <div className={style.cardImage}>
          <LazyLoad>
            <img src={img} />
          </LazyLoad>
        </div>
        <div className={style.info}>
          <div className={style.status}>{status}</div>
          <div className={style.name}>{name}</div>
          <div className={style.data}>
            <span>Data of birthday: </span>
            {birthday}
          </div>
          <div className={style.nickname}>
            <span>Nickname: </span>
            {nickname}
          </div>
          <div className={style.quote}>
            {" "}
            <span>Quote: </span>{quotes}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPage;
