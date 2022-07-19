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
  const { char_id, img, name, birthday, status } = useSelector(
    (state) => state.cardinfo.characters
  );
  
  return (
    <Card
      char_id={char_id}
      img={img}
      name={name}
      birthday={birthday}
      status={status}
      key= {char_id}
    />
  );
};

export const container = CardContainer;
