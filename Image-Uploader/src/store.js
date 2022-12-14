import { configureStore } from '@reduxjs/toolkit';
import { imagearr } from './redux component/imageslice';


const store = configureStore({
  reducer: {
    imagedata:imagearr
  },
})

export default store;