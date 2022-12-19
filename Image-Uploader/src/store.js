import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './redux component/imageslice';


const store = configureStore({
  reducer: {
    imageData:imageReducer
  },
})

export default store;