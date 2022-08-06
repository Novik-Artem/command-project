import React from "react";
import { useEffect } from "react";
import { getCharactersFromApi } from "../../../redux/actions/card-info";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";

const CardContainer = () => {
  const limit = useSelector((state) => state.cardinfo.limit);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharactersFromApi(limit));
  }, [limit]);
  const persons = useSelector((state) => state.cardinfo.characters);
  const loader = useSelector((state) => state.cardinfo.loader);
  return <CardList persons={persons} loader={loader} />;
};

export const container = CardContainer;
