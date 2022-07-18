import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardinfo: [
    {
      name: "Max",
      data: "13.07.2022",
    },
  ],
  number: 1,
};

export const cardinfo = createSlice({
  name: "cardinfo",
  initialState,
  reducers: {
    setNumber(state, action) {
      state.number = action.payload;
    },
  },
});
export default cardinfo.reducer;
