import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  characters: [],
  isGetCharactersError: false,
  isGetPersonError: false,
  person: [],
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
  },
});
export default cardinfo.reducer;

