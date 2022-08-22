import React from "react";
import { useEffect } from "react";
import { getCharactersFromApi } from "../../../redux/actions/card-info";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";
import { cardinfo } from "../../../redux/reducers/card-info";

const CardContainer = () => {
  const limit = useSelector((state) => state.cardinfo.limit);
  const currentPage = useSelector((state) => state.cardinfo.currentPage);
  const offset = useSelector((state) => state.cardinfo.offset);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharactersFromApi(limit, offset, currentPage));
  }, [limit, offset, currentPage]);
  const persons = useSelector((state) => state.cardinfo.characters);
  const loader = useSelector((state) => state.cardinfo.loader);
  const foundedPersons = useSelector((state) => state.cardinfo.foundedPersons);
  const isVisible = useSelector((state) => state.cardinfo.isVisible);
  const clearFoundedPersons = () => {
    dispatch(cardinfo.actions.clearFoundedPersons());
    dispatch(cardinfo.actions.changeIsVisible());
  }; 
  return (
    <CardList
      persons={persons}
      loader={loader}
      foundedPersons={foundedPersons}
      clearFoundedPersons={clearFoundedPersons}
      isVisible={isVisible}
    />
  );
};

export const container = CardContainer;
