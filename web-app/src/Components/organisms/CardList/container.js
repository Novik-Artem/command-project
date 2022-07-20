import React from "react";
import { useEffect } from "react";
import { getCharactersFromApi } from "../../../redux/actions/card-info";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";

const CardContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharactersFromApi());
  }, []);
  const persons = useSelector((state) => state.cardinfo.characters);
  return <CardList persons={persons} />;
};

export const container = CardContainer;
