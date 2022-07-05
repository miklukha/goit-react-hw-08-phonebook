import { configureStore } from '@reduxjs/toolkit';
import { clicksReducer } from './clicksSlice';

export const store = configureStore({
  reducer: {
    contacts: clicksReducer,
    // filter: '',
  },
});
