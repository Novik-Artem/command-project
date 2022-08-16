import React from "react";
import { useEffect } from "react";
import { getCharactersFromApi } from "../../../redux/actions/card-info";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";

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
  return (
    <CardList
      persons={persons}
      loader={loader}
      foundedPersons={foundedPersons}
    />
  );
};

export const container = CardContainer;
