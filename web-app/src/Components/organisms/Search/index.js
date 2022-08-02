import React from "react";
import style from "./styles.module.scss";
import LazyLoad from "react-lazy-load";
import img from "../../../assets/icons/search.svg";

function Search() {
  return (
    <div className={style.search}>
      <div className={style.searchField}>
        <div className={style.input}>
          <input type="text" placeholder="Поиск" />
        </div>
        <div className={style.button}>
          <LazyLoad className={style.image}>
            <img src={img}></img>
          </LazyLoad>
          <div className={style.text}>Найти</div>
        </div>
      </div>
    </div>
  );
}

export default Search;
