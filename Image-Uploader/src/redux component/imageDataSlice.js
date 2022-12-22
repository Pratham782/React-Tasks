import { createSlice, current } from "@reduxjs/toolkit";

let initialState = {
  imageData: [],
  propertyConfig: [],
  // editedData: [],
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
      // state.editedData = action.payload;
      console.log(`get id ${getId} values ${value} and change property value ${changedPropertyDataId}`);
      // console.log(state.editedData);
      state.imageData.map((value) => {
        value.map((vals) => {
          if(vals.id == getId){
            vals.metadata.map((val)=>{
              console.log("heeeeyyy",val.id)
            })
          }
        });
      });
    },
    resetPropertyData: (state, action) => {
      let { trait_type, defaultValue } = action.payload;
      let existingUser = state.propertyConfig.find((propertyData) => propertyData.trait_type == trait_type);
      if (existingUser) {
        existingUser.value = defaultValue;
      }
    },
    deletePropertyData: (state, action) => {
      // let { trait_type } = action.payload;
      // let [dataImageData] = state.imageData;
      // let existingUser = dataImageData.find((data) => {
      //   let [metadataValue] = data.metadata;
      //   return metadataValue.trait_type == trait_type;
      // });
      // if (existingUser) {
      //   return state.imageData.map((imagedata) => {
      //     let [value] = imagedata;
      //     value.metadata.map((val) => {
      //       return val.trait_type != trait_type;
      //     });
      //   });
      // }
    },
  },
});

// export const { collectImage, collectMetadata } = imageSlice.actions;
export const { setImageData, setPropertyConfig, resetPropertyData, editPropertyData, deletePropertyData, setPropertyToImageData } =
  imageDataSlice.actions;

// export default imageSlice.reducer;
export const imageDataReducer = imageDataSlice.reducer;
