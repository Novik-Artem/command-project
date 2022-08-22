import React from "react";
import { getPersonData } from "../../../redux/actions/card-info";
import { useDispatch } from "react-redux";
import Search from "./component";
import { cardinfo } from "../../../redux/reducers/card-info";

const SearchPerson = () => {
  const dispatch = useDispatch();
  const search = (name) => {
    dispatch(getPersonData(name));
  };
  const changeIsVisible = () => {
    dispatch(cardinfo.actions.changeIsVisible());
  };
  return <Search search={search} changeIsVisible={changeIsVisible} />;
};

export const container = SearchPerson;
