import { configureStore } from '@reduxjs/toolkit';
import imageReducer, {imageDataReducer} from './redux component/imageslice';


const store = configureStore({
  reducer: {
    imageData:imageReducer,
    imageDataReducer: imageDataReducer
  },
})

export default store;