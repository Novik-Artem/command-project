import React from "react";
import style from "./styles.module.scss";
import img from "../../../assets/images/baner.webp";
import LazyLoad from "react-lazy-load";

function MainPage() {
  return (
      <LazyLoad className={style.baner}>
        <img src={img} className={style.image}></img>
      </LazyLoad>
  );
}

export default MainPage;