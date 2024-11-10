import { configureStore } from '@reduxjs/toolkit';
import botStatusReducer from './statusReducer';
import userReducer from './userReducer';
import orderReducer from './orderReducer';

export default configureStore({
  reducer: {
    botStatus: botStatusReducer,
    user: userReducer,
    order: orderReducer,
  },
});
