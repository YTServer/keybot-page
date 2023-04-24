import { configureStore } from '@reduxjs/toolkit';
import botStatusReducer from './reducer';

export default configureStore({
  reducer: {
    botStatus: botStatusReducer,
  },
});
