import { cardinfo } from "../reducers/card-info";
import Core from "../../repository";

export const getCharactersFromApi = (number) => async (dispatch) => {
  dispatch(cardinfo.actions.setLoading(true));
  try {
    const { value, error } = await Core.Caracters.getPersons(number);
    if (error || !value) {
      dispatch(cardinfo.actions.setCharactersError(true));
    } else {
      dispatch(cardinfo.actions.setCharacters(value));
    }
  } catch (error) {
    console.log("Action error!");
  }
  dispatch(cardinfo.actions.setLoading(false));
};
export const getPersonFromApi = (id) => async (dispatch) => {
  dispatch(cardinfo.actions.setLoading(true));
  try {
    const { value, error } = await Core.Caracters.getPerson(id);
    if (error || !value) {
      dispatch(cardinfo.actions.setPersonError(true));
    } else {
      dispatch(cardinfo.actions.setPerson(value));
    }
  } catch (error) {
    console.log("Action error!");
  }
  dispatch(cardinfo.actions.setLoading(false));
};

