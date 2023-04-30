import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async () => {
    const res = await axios.get('https://api.whitey.me/api/v1/orders');
    return res.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    avatarUrl: '',
    loading: true,
    logged: false,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.logged = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.avatarUrl = action.payload.id;
        state.loading = false;
        state.logged = true;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.loading = false;
        state.logged = false;
      });
  },
});

export const selectUser = state => {
  return {
    avatarUrl: state.user.avatarUrl,
    loading: state.user.loading,
    logged: state.user.logged,
  };
};
export default userSlice.reducer;
