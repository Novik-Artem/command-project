import { cardinfo } from "../reducers/card-info";
import Core from "../../repository";

export const getCharactersFromApi = (limit) => async (dispatch) => {
  dispatch(cardinfo.actions.setLoading(true));
  try {
    const { value, error } = await Core.Caracters.getPersons(limit);
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
export const getAmountCards = (number) => async (dispatch) => {
  dispatch(cardinfo.actions.setAmountCards(number));
};
export const getPersonData = (name) => async (dispatch) => {
  dispatch(cardinfo.actions.setLoading(true));
  try {
    const { value, error } = await Core.Caracters.getPersonData(name);
    if (error || !value) {
      dispatch(cardinfo.actions.setPersonError(true));
    } else {
      dispatch(cardinfo.actions.foundPerson(value));
    }
  } catch (error) {
    console.log("Action error!");
  }
  dispatch(cardinfo.actions.setLoading(false));
};
export const getTotalCardsAmount = () => async (dispatch) => {
  try {
    const { value, error } = await Core.Caracters.getTotalCardsAmount();
    if (error || !value) {
      dispatch(cardinfo.actions.setPersonError(true));
    } else {
      dispatch(cardinfo.actions.setTotalCardsAmount(value));
    }
  } catch (error) {
    console.log("Action error!");
  }
};
export const updatePage = (page) => async (dispatch) => {
  dispatch(cardinfo.actions.setCurentPage(page));
};
