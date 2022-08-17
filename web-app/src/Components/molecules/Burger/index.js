import React from "react";
import style from "./styles.module.scss";
import img from "../../../assets/icons/burger.svg";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cardinfo } from "../../../redux/reducers/card-info";

function Burger() {
  const activeCatalog = useSelector((state) => state.cardinfo.activeCatalog);
  const dispatch = useDispatch();
  const changeActive = () => {
    dispatch(cardinfo.actions.changeActiveCatalog());
  };
  return (
    <Link
      to="/catalog"
      className={activeCatalog ? style.activeCatalog : style.catalog}
      onClick={changeActive}
    >
      <LazyLoad>
        <img src={img}></img>
      </LazyLoad>
      <div className={style.text}>Каталог</div>
    </Link>
  );
}

export default Burger;
