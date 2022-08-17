import React from "react";
import style from "./styles.module.scss";
import img from "../../../assets/images/logo.webp";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cardinfo } from "../../../redux/reducers/card-info";

function Logo() {
  const dispatch = useDispatch();
  const changeActive = () => {
    dispatch(cardinfo.actions.changeActiveCatalog());
  };
  return (
    <Link to="/" className={style.logo} onClick={changeActive}>
      <LazyLoad>
        <img src={img} className={style.image}></img>
      </LazyLoad>
    </Link>
  );
}

export default Logo;
