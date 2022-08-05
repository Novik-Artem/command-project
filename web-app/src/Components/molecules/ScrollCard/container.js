import React from "react";
import { getCharactersFromApi } from "../../../redux/actions/card-info";
import { useSelector, useDispatch } from "react-redux";
import ScrollCard from "./component";

const ScrollContainer = () => {
  const limit = useSelector((state) => state.cardinfo.limit);
  const dispatch = useDispatch();
  const changeAmount = (number) => {
    dispatch(getCharactersFromApi(number));
  };
  const numbers = useSelector((state) => state.cardinfo.numbers);
  return (
    <ScrollCard numbers={numbers} limit={limit} changeAmount={changeAmount} />
  );
};

export const container = ScrollContainer;
