import React from "react";
import style from "./styles.module.scss";

function ScrollCard({ numbers, limit, changeAmount }) {
  return (
    <div className={style.amount}>
      <div className={style.text}>Отобразить карточек:</div>
      <div className={style.buttons}>
        {numbers.map((number) => {
          return (
            <button
              key={number}
              className={limit === number ? style.currentNumber : style.number}
              onClick={() => changeAmount(number)}
            >
              {number}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ScrollCard;
