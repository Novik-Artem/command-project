import React from "react";
import style from "./styles.module.scss";
import Card from "../Card";
import CardTable from "../CardTable";

function CardList({ persons }) {
  return (
    <div>
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
      <div className={style.cards}>
        {persons.map((card) => (
          <CardTable
            id={card.char_id}
            img={card.img}
            name={card.name}
            birthday={card.birthday}
            status={card.status}
            key={card.char_id}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;
