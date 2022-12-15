import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './redux component/imageslice';


const store = configureStore({
  reducer: {
    count:imageReducer
  },
})

export default store;