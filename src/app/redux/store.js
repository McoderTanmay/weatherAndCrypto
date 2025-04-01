import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import cryptoReducer from './cryptoSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    crypto: cryptoReducer,
  },
});

export default store;