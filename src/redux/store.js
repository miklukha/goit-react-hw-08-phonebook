import { configureStore } from '@reduxjs/toolkit';
// import { clicksReducer } from './clicksSlice';
import { createAction, createReducer } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const add = createAction('contacts/add');
export const remove = createAction('contacts/remove');

// за кожну властивість відповідає окремий reducer
const contactsReducer = createReducer([], {
  [add]: (state, actions) => {
    const contact = {
      id: nanoid(),
      name: actions.payload.name,
      number: actions.payload.number,
    };

    return [contact, ...state];
  },
  [remove]: (state, actions) => {
    return state.filter(contact => contact.id !== actions.payload);
  },
});

/**
 *     const contact = {
      id: nameInputId(),
      name,
      number,
    };

    setContacts(state => {
      const isExistName = state.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isExistName) {
        toast.error(`${name} is already in contacts`);
        return state;
      }

      return [contact, ...state];
    });
 */

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // filter: '',
  },
});
