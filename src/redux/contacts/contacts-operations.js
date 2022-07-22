// import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as contactsAPI from 'services/contacts-api';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const contacts = await contactsAPI.fetchContacts();
//       console.log(contacts);
//       return contacts;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
import axios from 'axios';
// import {
//   addTodoRequest,
//   addTodoSuccess,
//   addTodoError,
//   deleteTodoRequest,
//   deleteTodoSuccess,
//   deleteTodoError,
//   toggleCompletedRequest,
//   toggleCompletedSuccess,
//   toggleCompletedError,
//   fetchTodosRequest,
//   fetchTodosSuccess,
//   fetchTodosError,
// } from './todos-actions';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from './contacts-actions';

axios.defaults.baseURL = 'https://62ce7c73486b6ce826460c2d.mockapi.io';

// GET @ /tasks
const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

// POST @ /tasks
const addContact = data => dispatch => {
  dispatch(addContactsRequest());

  axios
    .post('/contacts', data)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch(error => dispatch(addContactsError(error.message)));
};

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactsSuccess(contactId)))
    .catch(error => dispatch(deleteContactsError(error.message)));
};

// // PATCH @ /tasks/:id
// const toggleCompleted =
//   ({ id, completed }) =>
//   dispatch => {
//     const update = { completed };

//     dispatch(toggleCompletedRequest());

//     axios
//       .patch(`/tasks/${id}`, update)
//       .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
//       .catch(error => dispatch(toggleCompletedError(error.message)));
//   };

export const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
  // toggleCompleted,
};
