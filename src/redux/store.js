import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'redux/contacts/slice';
import { filterSlice } from './filter/slice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
