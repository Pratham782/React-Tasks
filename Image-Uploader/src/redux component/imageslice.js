import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imgvalue: [],
};

export const imageSlice = createSlice({
  name: "imagedata",
  initialState,
  reducers: {
    imagearr: (state, action) => {
      state.imgvalue.push = action.payload;
    },
  },
});

export const { imagearr } = imageSlice.actions;

export default imageSlice.reducer;
