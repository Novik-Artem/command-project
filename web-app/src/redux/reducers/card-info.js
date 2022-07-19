import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  characters: [],
  isGetCharactersError: false,
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
  },
});
export default cardinfo.reducer;

