import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  isGetCharactersError: false,
  isGetPersonError: false,
  person: [],
  loader: false,
  numbers: [5, 10, 15, 20],
  limit: 9,
  foundedPerson: null,
  pages: [],
  currentPage: 1,
  totalCardAmount: 0,
  offset: 0,
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
    setTotalCardsAmount(state, { payload }) {
      state.totalCardAmount = payload;
    },
    setCurentPage(state, { payload }) {
      state.currentPage = payload;
      state.offset = (state.currentPage - 1) * state.limit;
    },
    setPagesCount(state) {
      state.pages = [];
      let pagesCount = Math.ceil(state.totalCardAmount / state.limit);
      for (let i = 1; i <= pagesCount; i++) {
        state.pages.push(i);
      }
    },
    nextPage(state) {
      state.offset = state.offset + state.limit;
      state.currentPage = state.currentPage + 1;
    },
    prevPage(state) {
      state.offset = state.offset - state.limit;
      state.currentPage = state.currentPage - 1;
    },
  },
});
export default cardinfo.reducer;
