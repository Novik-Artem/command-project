import React from "react";
import Card from "../organisms/Card";
import Search from "../organisms/Search";
import CardsHead from "../organisms/CardsHead";

function CardsPage() {
  return (
    <div>
      <Search />
      <CardsHead/>
      <Card />
    </div>
  );
}

export default CardsPage;
