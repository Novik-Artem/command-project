import { quotes } from "../reducers/quotes";
import { cardinfo } from "../reducers/card-info";
import Core from "../../repository";

export const getQuotesFromApi = (name) => async (dispatch) => {
    dispatch(cardinfo.actions.setLoading(true));
    try {
      const { value, error } = await Core.Quotes.getPersonQuote(name);
      if (error || !value) {
        dispatch(cardinfo.actions.setPersonError(true));
      } else {
        dispatch(quotes.actions.foundQuote(value));
      }
    } catch (error) {
      console.log("Action error!");
    }
    dispatch(cardinfo.actions.setLoading(false));
  };