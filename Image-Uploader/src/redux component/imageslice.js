import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [arr=[]],
};

// const metastate = {
//   trait_type: "",
//   value: "",
//   datatype: "number",
//   defaultValue: "#00134",
// };

export const imageSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    collectImage: (state, action) => {
      state.value.push(action.payload);
    }
  },
});

export const { collectImage} = imageSlice.actions;

export default imageSlice.reducer;
