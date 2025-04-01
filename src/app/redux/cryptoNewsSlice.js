import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://newsdata.io/api/1/latest';
const API_KEY = 'pub_77581c8d91fd9bd674bb8a18b0a030863555a';

export const fetchCryptoNews = createAsyncThunk(
  'cryptoNews/fetchCryptoNews',
  async () => {
    const response = await axios.get(API_URL, {
      params: { apikey: API_KEY },
    });
    return response.data.results;
  }
);

const cryptoNewsSlice = createSlice({
  name: 'cryptoNews',
  initialState: {
    news: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCryptoNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(fetchCryptoNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cryptoNewsSlice.reducer;
