import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOrder = createAsyncThunk('order/fetchOrder', async () => {
  const res = await axios.get('https://api.whitey.me/api/v1/orders');
  return res.data;
});

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    // orders: [
    //   {
    //     SteamID: '1',
    //     Price: 60,
    //     Count: 10,
    //     OrderStatus: {
    //       Amt: 628,
    //       TradeNo: '20011914051983714',
    //       PayInfo: 'CVS00119105187',
    //       PaymentType: 'CVS',
    //       TradeStatus: '1',
    //       ExpireDate: '2020-01-20 23:59:59',
    //     }
    //   },
    //   {
    //     SteamID: '1',
    //     Price: 60,
    //     Count: 11,
    //     OrderStatus: {
    //       Amt: 688,
    //       TradeNo: '20011914051983714',
    //       PayInfo: 'CVS00119105187',
    //       PaymentType: 'CVS',
    //       TradeStatus: '0',
    //       ExpireDate: '2020-01-20 23:59:59',
    //     }
    //   }
    // ],
    loading: true,
  },
  reducers: {},
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

export const selectOrder = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
  };
};
export default orderSlice.reducer;
