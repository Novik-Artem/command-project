import React, { useState } from "react";
import style from "./styles.module.scss";
import LazyLoad from "react-lazy-load";
import img from "../../../assets/icons/search.svg";

function Search({ search, changeIsVisible }) {
  const [name, setName] = useState("");
  const submit = () => {
    search(name);
    setName("");
    changeIsVisible();
  };
  return (
    <div className={style.search}>
      <div className={style.searchField}>
        <div className={style.input}>
          <input
            type="text"
            placeholder="Поиск"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={style.button} onClick={submit}>
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
