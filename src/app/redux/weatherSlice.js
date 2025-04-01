import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ lat, lon }) => {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        lat,
        lon,
        appid: "a676557216d22d7f4874a7350f0d039d",
      },
    });
    return { lat, lon, data: response.data };
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: {}, // Using an object to store weather data by location
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        const { lat, lon, data } = action.payload;
        const locationKey = `${lat},${lon}`; // Create a unique key for each location
        state.data[locationKey] = data; // Store weather data for each location
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
