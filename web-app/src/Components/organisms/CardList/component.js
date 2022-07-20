import React from "react";
import style from "./styles.module.scss";
import Card from "../Card";

function CardList({persons}) {
  return (
    <div className={style.cards}>
      {persons.map((card) => (
        <Card
          id={card.char_id}
          img={card.img}
          name={card.name}
          birthday={card.birthday}
          status={card.status}
          key={card.char_id}
        />
      ))}
    </div>
  );
}

export default CardList;
