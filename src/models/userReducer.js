import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async () => {
    const res = await axios.get('https://api.whitey.me/api/v1/user');
    return res.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    avatar: '',
    name: '',
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
        state.avatar = action.payload.avatar;
        state.name = action.payload.name;
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
    avatar: state.user.avatar,
    name: state.user.name,
    loading: state.user.loading,
    logged: state.user.logged,
  };
};
export default userSlice.reducer;
