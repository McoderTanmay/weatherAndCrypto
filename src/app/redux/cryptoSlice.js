import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3/';
const API_KEY = 'CG-1Ydfz1GqqK512bgeBexryPfD'; 

export const fetchCryptoData = createAsyncThunk(
  'crypto/fetchCryptoData',
  async (cryptoIds) => {
    const response = await axios.get(`${BASE_URL}coins/markets`, {
      params: {
        vs_currency: 'usd',
        ids: cryptoIds.join(','),
      },
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': API_KEY,
      },
    });
    return response.data;
  }
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCryptoData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCryptoData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cryptoSlice.reducer;
