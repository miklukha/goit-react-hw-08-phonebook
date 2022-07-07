import {
  configureStore,
  getDefaultMiddleware,
  createSlice,
  combineReducers,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
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

const contactsPersistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(
  contactsPersistConfig,
  combineReducers({ contacts: contactsSlice.reducer })
);

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    change: (state, { payload }) => {
      return payload;
    },
  },
});
export const { change } = filterSlice.actions;

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
