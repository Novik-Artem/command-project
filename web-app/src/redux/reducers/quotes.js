import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quotes: "",
};

export const quotes = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    foundQuote(state, { payload }) {
      state.quotes = payload;
    },
  },
});
export default quotes.reducer;
