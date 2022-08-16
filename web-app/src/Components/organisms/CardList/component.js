import React from "react";
import style from "./styles.module.scss";
import Card from "../Card";
import CardTable from "../CardTable";
import LazyLoad from "react-lazy-load";
import firstImage from "../../../assets/icons/firstStyleCards.svg";
import secondImage from "../../../assets/icons/secondStyleCards.svg";
import { useState } from "react";
import Loader from "../../atoms/Loader";
import ScrollCard from "../../molecules/ScrollCard";
import PaginationItems from "../../molecules/Pagination";

function CardList({ persons, loader, foundedPersons }) {
  const [toggle, setToggle] = useState(true);
  const changeToggle = () => {
    setToggle(!toggle);
  };
  return loader ? (
    <Loader />
  ) : (
    <div>
      <div className={style.wrapper}>
        <div className={style.text}>Каталог</div>
        <div className={style.buttons}>
          <button
            className={style.button}
            disabled={!toggle}
            onClick={changeToggle}
          >
            <LazyLoad className={style.image}>
              <img src={firstImage}></img>
            </LazyLoad>
          </button>
          <button
            className={style.button}
            disabled={toggle}
            onClick={changeToggle}
          >
            <LazyLoad className={style.image}>
              <img src={secondImage}></img>
            </LazyLoad>
          </button>
        </div>
      </div>
      {/* {foundedPersons}?
      <div className={style.foundedPersons}>
        <div className={toggle ? style.cards : style.toggleOff}>
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
        <div className={!toggle ? style.toggleOn : style.cardsRow}>
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
      </div>{" "}
      : */}
      <div className={style.persons}>
        <div className={toggle ? style.cards : style.toggleOff}>
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
        <div className={!toggle ? style.toggleOn : style.cardsRow}>
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
      <div className={style.footer}>
        <PaginationItems />
        <ScrollCard />
      </div>
    </div>
  );
}

export default CardList;
