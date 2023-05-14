import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOrder = createAsyncThunk(
  'order/fetchOrder',
  async () => {
    const res = await axios.get('https://api.whitey.me/api/v1/orders');
    return res.data;
  }
);

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],
    loading: true,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.orders = action.payload.orders;
        state.loading = false;
      })
      .addCase(fetchOrder.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const selectOrder = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
  };
};
export default orderSlice.reducer;
