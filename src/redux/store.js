import { configureStore } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { clicksReducer } from './clicksSlice';
import { createAction, createReducer } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { getContactsLS } from 'helpers/storage';

export const add = createAction('contacts/add');
export const remove = createAction('contacts/remove');

// за кожну властивість відповідає окремий reducer
const contactsReducer = createReducer([], {
  [add]: (state, { payload: { name, number } }) => {
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
  [remove]: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload);
  },
});

export const change = createAction('filter/change');

const filterReducer = createReducer('', {
  [change]: (state, { payload }) => {
    return payload;
  },
});

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  preloadedState: getContactsLS(),
});
