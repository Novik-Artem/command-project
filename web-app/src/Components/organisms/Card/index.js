import React from "react";
import style from "./styles.module.scss";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cardinfo } from "../../../redux/reducers/card-info";

const Card = ({ id, img, name, birthday, status }) => {
  const dispatch = useDispatch();
  const changeActive = () => {
    dispatch(cardinfo.actions.changeActiveCatalog());
  };
  return (
    <Link to={`/catalog/${id}`} onClick={changeActive}>
      <div className={style.wrapper}>
        <div className={style.card}>
          <div className={style.image}>
            <LazyLoad>
              <img src={img} />
            </LazyLoad>
          </div>
          <div className={style.content}>
            <div className={style.status}>{status}</div>
            <div className={style.name}>{name}</div>
            <div className={style.data}>{birthday}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
