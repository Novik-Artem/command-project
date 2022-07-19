import React from "react";
import style from "./styles.module.scss";
import Card from "../Card";
import { characters } from "../../../redux/reducers/card-info";

function CardList() {
  return (
    <div className={style.cards}>
      {characters.map((card) => (
        <Card />
      ))}
    </div>
  );
}

export default CardList;
