import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const imageSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    collectImage: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { collectImage } = imageSlice.actions;

export default imageSlice.reducer;
