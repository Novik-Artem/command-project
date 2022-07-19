import React from "react";
import CardList from "../organisms/CardList";
import Search from "../organisms/Search";
import CardsHead from "../organisms/CardsHead";

function CardsPage() {
  return (
    <div>
      <Search />
      <CardsHead/>
      <CardList />
    </div>
  );
}

export default CardsPage;
