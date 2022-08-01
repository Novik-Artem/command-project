import CardPage from "./component";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPersonFromApi } from "../../../redux/actions/card-info";

const CardPageContainer = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPersonFromApi(id));
  }, []);
  const person = useSelector((state) => state.cardinfo.person);
  return (
    <CardPage
      img={person.img}
      name={person.name}
      birthday={person.birthday}
      nickname={person.nickname}
      status={person.status}
    />
  );
};

export const container = CardPageContainer;
