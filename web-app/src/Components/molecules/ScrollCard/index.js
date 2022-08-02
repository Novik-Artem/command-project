import React from "react";
import style from "./styles.module.scss";
import LazyLoad from "react-lazy-load";
import leftArrow from "../../../assets/icons/leftArrow.svg";
import rightArrow from "../../../assets/icons/rightArrow.svg";

function ScrollCard() {
  return (
    <div className={style.wrapper}>
      <div className={style.pages}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>...</button>
        <button>8</button>
        <button>
          <LazyLoad>
            <img src={leftArrow} />
          </LazyLoad>
        </button>
        <button>
          <LazyLoad>
            <img src={rightArrow} />
          </LazyLoad>
        </button>
      </div>
      <div className={style.amount}>
        <div className={style.text}>Отобразить карточек:</div>
        <button>5</button>
        <button>10</button>
        <button>15</button>
        <button>20</button>
      </div>
    </div>
  );
}

export default ScrollCard;
