import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import cryptoReducer from './cryptoSlice';
import cryptoNewsReducer from "./cryptoNewsSlice"

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    crypto: cryptoReducer,
    cryptoNews: cryptoNewsReducer,
  },
});

export default store;