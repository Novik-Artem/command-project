import React from "react";
import { getPersonData } from "../../../redux/actions/card-info";
import { useDispatch } from "react-redux";
import Search from "./component";

const SearchPerson = () => {
  const dispatch = useDispatch();
  const search = (name) => {
    dispatch(getPersonData(name));
  };
  return <Search search={search} />;
};

export const container = SearchPerson;
