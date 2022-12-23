import { createSlice, current } from "@reduxjs/toolkit";

let initialState = {
  imageData: [],
  propertyConfig: [],
};

export const imageDataSlice = createSlice({
  name: "imageDataSlice",
  initialState,
  reducers: {
    setImageData: (state, action) => {
      state.imageData = action.payload;
    },
    setPropertyConfig: (state, action) => {
      state.propertyConfig = action.payload;
    },
    setPropertyToImageData: (state, action) => {
      state.imageData != null &&
        state.imageData.map((imageData) => {
          imageData.map((data) => {
            data.metadata = action.payload;
          });
        });
    },
    editPropertyData: (state, action) => {
      let { getId, value, changedPropertyDataId } = action.payload;
      let existing = state.imageData.map((value) => {
        return value.find((vals) => {
          return vals.id == getId;
        });
      });
      if (existing) {
        let newData = existing.map((value) => {
          let { metadata } = value;
          metadata.find((vals) => {
            console.log(vals.id == changedPropertyDataId);
          });
        });
        if (newData) {
          console.log(newData);
        }
      }
    },
    resetPropertyData: (state, action) => {
      let { trait_type, defaultValue } = action.payload;
      let existingUser = state.propertyConfig.find((propertyData) => propertyData.trait_type == trait_type);
      if (existingUser) {
        existingUser.value = defaultValue;
      }
    },
    deletePropertyData: (state, action) => {
      let { trait_type } = action.payload;
      let [dataImageData] = state.imageData;
      let existingUser = dataImageData.find((data) => {
        let [metadataValue] = data.metadata;
        return metadataValue.trait_type == trait_type;
      });
      if (existingUser) {
        state.imageData.filter((imagedata) => {
          let [value] = imagedata;
          return value.metadata.map((val) => {
            return val.trait_type !== trait_type;
          });
        });
      }
    },
  },
});

export const { setImageData, setPropertyConfig, resetPropertyData, editPropertyData, deletePropertyData, setPropertyToImageData } =
  imageDataSlice.actions;

export const imageDataReducer = imageDataSlice.reducer;
