import React from "react";
import style from "./styles.module.scss";
import Card from "../Card";
import { characters } from "../../../redux/reducers/card-info";

function CardList() {
  return (
    <div className={style.cards}>
      {characters.map((card) => (
        <Card
          img={card.img}
          birthday={card.birthday}
          status={card.status}
          name={card.name}
          key={card.char_id}
          id={card.char_id}
        />
      ))}
    </div>
  );
}

export default CardList;
