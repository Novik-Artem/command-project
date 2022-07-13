import React from "react";
import style from "./styles.module.scss";
import img from "../../../assets/images/baner.webp";
import LazyLoad from "react-lazy-load";

function Baner() {
  return (
    <div className={style.baner}>
      <LazyLoad>
        <img src={img} className={style.image}></img>
      </LazyLoad>
    </div>
  );
}

export default Baner;
