import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    change: (state, { payload }) => {
      return payload;
    },
  },
});

export const { change } = filterSlice.actions;
