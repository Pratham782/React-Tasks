import { createSlice } from "@reduxjs/toolkit";

// const metastate = {
//   trait_type: "",
//   value: "",
//   datatype: "number",
//   defaultValue: "#00134",
// };
let getid = [];
let stateIndex = [];

export const imageSlice = createSlice({
  name: "counter",
  initialState: [],
  reducers: {
    collectImage: (state, action) => {
      let actions = action.payload;
      let value = Object.values(actions);
      value.map((val) => {
        getid.push(val.id);
        val.metadata = new Array();
      });
      state.push(actions);
      state.map((val, index) => {
        stateIndex.push(index);
        console.log(stateIndex.length);
        if (stateIndex.length > 2) {
          stateIndex.shift();
        }
      });
    },
    collectMetadata: (state, action) => {
      getid.map((val) => {
        stateIndex.map((vas, index) => {
          state[vas][val - 1].metadata.push(action.payload);
        });
      });
    },
  },
});

export const { collectImage, collectMetadata } = imageSlice.actions;

export default imageSlice.reducer;
