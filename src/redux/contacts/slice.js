import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

      const isExistName = state.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isExistName) {
        toast.error(`${name} is already in contacts`);
        return state;
      }

      state.push(contact);
    },
    remove: (state, { payload }) => {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export const { add, remove } = contactsSlice.actions;
