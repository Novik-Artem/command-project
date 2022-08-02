import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cardinfo from "./reducers/card-info";

const reducer = combineReducers({ cardinfo });

export const setupStore = () => {
  return configureStore({ reducer });
};
export default setupStore;
