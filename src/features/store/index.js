// index.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/Auth';
import userReducer from '../slice/User';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export default store;
