import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    add: (state, { payload: { name, number } }) => {
      const contact = {
        id: nanoid(),
        name: name,
        number: number,
      };

      state.push(contact);
    },
    remove: (state, { payload }) => {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export const { add, remove } = contactsSlice.actions;
