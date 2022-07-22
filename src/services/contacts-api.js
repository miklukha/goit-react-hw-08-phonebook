import axios from 'axios';

axios.defaults.baseURL = 'https://62ce7c73486b6ce826460c2d.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}
