import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  characters: [],
  isGetCharactersError: false,
  isGetPersonError: false,
  person: [],
  loader: false,
  numbers: [5,10,15,20],
  limit: 9,
  foundedPerson: null,
};

export const cardinfo = createSlice({
  name: "cardinfo",
  initialState,
  reducers: {
    setCharacters(state, { payload }) {
      state.characters = payload;
    },
    setCharactersError(state, { payload }) {
      state.isGetCharactersError = payload;
    },
    setPerson(state, { payload }) {
      state.person = payload;
    },
    setPersonError(state, { payload }) {
      state.isGetPersonError = payload;
    },
    setLoading(state, { payload }) {
      state.loader = payload;
    },
    foundPerson(state, { payload }) {
      state.foundedPerson = payload;
      console.log(state.foundedPerson);
    },
    setAmountCards(state, { payload }) {
      state.limit = payload;
    },
  },
});
export default cardinfo.reducer;

