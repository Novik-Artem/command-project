import React from "react";
import style from "./styles.module.scss";
import ScrollCard from "../../molecules/ScrollCard";
import AmountCard from "../../molecules/AmountCard";

function CatalogFooter() {
  return (
    <div className={style.wrapper}>
      <ScrollCard />
      <AmountCard />
    </div>
  );
}

export default CatalogFooter;
