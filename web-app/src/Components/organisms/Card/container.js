import { useSelector, useDispatch } from "react-redux";
import { cardinfo } from "../../../redux/reducers/card-info";
import Card from "./component";

const CardContainer = () => {
  const { name, data } = useSelector((state) => state.cardinfo.cardinfo[0]);
  const dispatch = useDispatch();
  const setN = () => {
    dispatch(cardinfo.actions.setNumber(10));
  };
  const number = useSelector((state) => state.cardinfo.number);
  return <Card name={name} data={data} number={number} setN={setN} />;
};

export const container = CardContainer;
