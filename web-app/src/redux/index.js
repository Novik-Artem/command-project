import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cardinfo from "./reducers/card-info";
import quotes from "./reducers/quotes";

const reducer = combineReducers({ cardinfo, quotes });

export const setupStore = () => {
  return configureStore({ reducer });
};
export default setupStore;
