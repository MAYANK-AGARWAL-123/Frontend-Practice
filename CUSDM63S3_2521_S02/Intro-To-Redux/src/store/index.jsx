// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    counter: counterReducer
  }
});