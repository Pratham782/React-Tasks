import { createSlice, current } from "@reduxjs/toolkit";

let initialState = {
  imageData: [],
  propertyConfig: [],
  checkedId: [],
  individualPropertyForImageData: [],
};

export const imageDataSlice = createSlice({
  name: "imageDataSlice",
  initialState,
  reducers: {
    setImageData: (state, action) => {
      return {
        ...state,
        imageData: state.imageData.concat(action.payload.imageDataObj),
      };
    },
    setPropertyConfig: (state, action) => {
      state.propertyConfig = action.payload;
    },
    setPropertyToImageData: (state) => {
      state.imageData != null &&
        state.imageData.map((imageData) => {
          imageData.metadata = state.propertyConfig.map((innerImageObject) => ({ ...innerImageObject }));
        });
    },
    resetPropertyData: (state, action) => {
      let { trait_type, defaultValue } = action.payload;
      let existingPropertyData = state.propertyConfig.find((propertyData) => propertyData.trait_type == trait_type);
      if (existingPropertyData) {
        existingPropertyData.value = defaultValue;
      }
    },
    deleteAllPropertyData: (state, action) => {
      return {
        ...state,
        propertyConfig: state.propertyConfig.filter((propertyData) => {
          return propertyData.trait_type !== action.payload.trait_type;
        }),
      };
    },
    deleteIndividualPropertyData: (state, action) => {
      let individualImageDivId = action.payload;
      return {
        ...state,
        imageData: state.imageData.filter((imageObjData) => {
          return imageObjData.id !== individualImageDivId;
        }),
      };
    },
    setCheckedAndEditedData: (state, action) => {
      return { ...state, checkedId: [...state.checkedId, action.payload.getId] };
    },
    removeCheckedAndEditedData: (state, action) => {
      return { ...state, checkedId: state.checkedId.filter((getId) => getId !== action.payload) };
    },
    editPropertyData: (state, action) => {
      let { getId, newPropertyValue, changedPropertyDataId } = action.payload;
      return {
        ...state,
        imageData: state.imageData.map((content, i) =>
          content.id === getId
            ? {
                ...content,
                metadata: content.metadata.map((data) => {
                  return data.id === changedPropertyDataId ? { ...data, value: newPropertyValue } : data;
                }),
              }
            : { ...content }
        ),
      };
    },
  },
});

export const {
  setImageData,
  setPropertyConfig,
  resetPropertyData,
  editPropertyData,
  deleteAllPropertyData,
  setPropertyToImageData,
  deleteIndividualPropertyData,
  setCheckedAndEditedData,
  removeCheckedAndEditedData,
} = imageDataSlice.actions;

export const imageDataReducer = imageDataSlice.reducer;
