import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBotStatus = createAsyncThunk(
  'botStatus/fetchBotStatus',
  async () => {
    const res = await axios.get('https://api.whitey.me/api/v1/bot/status');
    return res.data;
  }
);

export const botStatusSlice = createSlice({
  name: 'botStatus',
  initialState: {
    price: 0,
    stock: 0,
    orders: 0,
    loading: true,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBotStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBotStatus.fulfilled, (state, action) => {
        state.price = action.payload.price;
        state.stock = action.payload.stock;
        state.orders = action.payload.orders;
        state.loading = false;
      })
      .addCase(fetchBotStatus.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const selectStatus = state => {
  return {
    price: state.botStatus.price,
    stock: state.botStatus.stock,
    orders: state.botStatus.orders,
    loading: state.botStatus.loading,
  };
};
export default botStatusSlice.reducer;
