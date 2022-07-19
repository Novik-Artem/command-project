import React from "react";
import { useEffect } from "react";
import { getCharactersFromApi } from "../../../redux/actions/card-info";
import { useSelector, useDispatch } from "react-redux";
import { characters } from "../../../redux/reducers/card-info";
import Card from "../Card";

const CardContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharactersFromApi());
  }, []);
  const persons = useSelector(
    (state) => state.cardinfo.characters
  );
  return (
    <Card
      char_id={persons.char_id}
      img={persons.img}
      name={persons.name}
      birthday={persons.birthday}
      status={persons.status}
      key= {persons.char_id}
    />
  );
};

export const container = CardContainer;
