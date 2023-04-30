import { configureStore } from '@reduxjs/toolkit';
import botStatusReducer from './statusReducer';
import userReducer from './userReducer';

export default configureStore({
  reducer: {
    botStatus: botStatusReducer,
    user: userReducer,
  },
});
