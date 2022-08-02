import React from "react";
import CardList from "../../organisms/CardList";
import Search from "../../organisms/Search";
import CardsHead from "../../organisms/CardsHead";
import ScrollCard from "../../molecules/ScrollCard";

function CardsPage() {
  return (
    <div>
      <Search />
      {/* <CardsHead/> */}
      <CardList />
      <ScrollCard />
    </div>
  );
}

export default CardsPage;
