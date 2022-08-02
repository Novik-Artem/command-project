import { cardinfo } from "../reducers/card-info";
import Core from "../../repository";

export const getCharactersFromApi = () => async (dispatch) => {
  try {
    const { value, error } = await Core.Caracters.getPersons();
    if (error || !value) {
      dispatch(cardinfo.actions.setCharactersError(true));
    } else {
      dispatch(cardinfo.actions.setCharacters(value));
    }
  } catch (error) {
    console.log("Action error!");
  }
};
