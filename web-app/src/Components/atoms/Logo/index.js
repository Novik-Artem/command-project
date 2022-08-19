import React from "react";
import style from "./styles.module.scss";
import img from "../../../assets/images/logo.webp";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className={style.logo}>
      <LazyLoad>
        <img src={img} className={style.image}></img>
      </LazyLoad>
    </Link>
  );
}

export default Logo;
