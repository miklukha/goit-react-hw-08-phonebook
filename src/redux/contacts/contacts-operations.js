import axios from 'axios';
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

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

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

export const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};
