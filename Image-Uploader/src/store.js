import { configureStore } from '@reduxjs/toolkit';
import {imageDataReducer} from './redux component/imageDataSlice';


const store = configureStore({
  reducer: {
    imageDataReducer: imageDataReducer
  },
})

export default store;