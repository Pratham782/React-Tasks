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
        imageData: state.imageData.concat(action.payload),
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

// let update = [];
// let existing = state.imageData.map((values) => {
//   if(values.id == getId){
//     update.push(true)
//   }
// });
// console.log(update)
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

// return produce((state, draftState) => {
//   let [imageData] = draftState.imageData;
//   // if (outerObject.id === outerObjectId) {
//   //   const innerArray = outerObject.innerArray;
//   //   const innerArrayItem = innerArray.find(item => item.id === innerArrayItemId);
//   //   if (innerArrayItem) {
//   //     innerArrayItem.property = newPropertyValue;
//   //   }
//   // }

//   if (imageData.id == getId) {
//     const metadataInnerArray = imageData.metadata;
//     const innerArrayPropertyItem = metadataInnerArray.find((item) => item.id == changedPropertyDataId);
//     if (innerArrayPropertyItem) {
//       innerArrayPropertyItem.value = "redd";
//     }
//   }
// });
// return {
//   ...state,
//   imageData: state.imageData.map((imageData) => {
//     console.log(imageData.id === getId);
//     if (imageData.id === getId) {
//       const metadataInnerArray = imageData.metadata;
//       const innerArrayPropertyItem = metadataInnerArray.find((item) => item.id === changedPropertyDataId);
//       if (innerArrayPropertyItem) {
//         return[...innerArrayPropertyItem,{value:newPropertyValue}];
//       }
//     }
//   }),
// };

// state.individualPropertyForImageData = state.propertyConfig.map((objValue) => ({ ...objValue })); //deep copy property Config
// state.individualPropertyForImageData = JSON.parse(JSON.stringify(state.propertyConfig));
// state.imageData != null &&
//   state.imageData.map((imageData) => {
//     imageData.metadata = state.individualPropertyForImageData;
//   });
