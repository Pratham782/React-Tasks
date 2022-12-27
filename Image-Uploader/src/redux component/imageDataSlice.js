import { createSlice, current } from "@reduxjs/toolkit";
import {produce} from 'immer';


let initialState = {
  imageData: [],
  propertyConfig: [],
};

export const imageDataSlice = createSlice({
  name: "imageDataSlice",
  initialState,
  reducers: {
    setImageData: (state, action) => {
      return {
        ...state,
        imageData: state.imageData.concat(action.payload),
      };
    },
    setPropertyConfig: (state, action) => {
      state.propertyConfig = action.payload;
    },
    setPropertyToImageData: (state, action) => {
      state.imageData != null &&
        state.imageData.map((imageData) => {
          imageData.metadata = action.payload;
        });
    },
    resetPropertyData: (state, action) => {
      let { trait_type, defaultValue } = action.payload;
      let existingUser = state.propertyConfig.find((propertyData) => propertyData.trait_type == trait_type);
      if (existingUser) {
        existingUser.value = defaultValue;
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
    editPropertyData: (state, action) => {
      let { getId, value, changedPropertyDataId } = action.payload;
      let update = [];
      let existing = state.imageData.map((values) => {
        if(values.id == getId){
          update.push(true)
        }
      });
      console.log(update)
      // if (existing) {
      //   let newData = existing.map((value) => {
      //     let { metadata } = value;
      //     metadata.find((vals) => {
      //       console.log(vals.id == changedPropertyDataId);
      //     });
      //   });
      //   if (newData) {
      //     console.log(newData);
      //   }
      // }
      // return {
      //   ...state,
      //   imageData : state.imageData.map((imageData)=>{
      //     let getImageObjectValue = Object.values(imageData);
      //     let datas = getImageObjectValue.map((objectData) => {
      //       if(objectData.trait_type !== trait_type){
      //         return {...objectData,}
      //       }
      //     });
      //     return datas
      //   })
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
} = imageDataSlice.actions;

export const imageDataReducer = imageDataSlice.reducer;
