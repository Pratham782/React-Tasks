import { createSlice } from "@reduxjs/toolkit";

// let idForLocalUse = [];
// let ourStateIndex = [];

export const imageSlice = createSlice({
  name: "collectdata",
  initialState: [],
  reducers: {
    collectImage: (state, action) => {
      let imagesData = action.payload;
      state.push(imagesData);
      let imageObjectToValues = Object.values(imagesData);
      imageObjectToValues.map((data) => {
        idForLocalUse.push(data.id);
        data.metadata = new Array();
      });
      state.map((value, index) => {
        ourStateIndex.push(index);
      });
    },
    collectMetadata: (state, action) => {
      idForLocalUse.map((val) => {
        state[0][val - 1].metadata.push(action.payload);
      });
    },
  },
});

export const imageDataSlice = createSlice({
  name: "imageDataSlice",
  initialState: {
    imageData: [],
    propertyConfig: [],
  },
  reducers: {
    setImageData: (state, action) => {
     state.imageData = [...state.imageData, action.payload]
    },
    setPropertyConfig: (state, action) => {
      state.propertyConfig = action.payload
    },
  },
});

export const { collectImage, collectMetadata } = imageSlice.actions;
export const { setImageData, setPropertyConfig } = imageDataSlice.actions;

export default imageSlice.reducer;
export const imageDataReducer = imageDataSlice.reducer
