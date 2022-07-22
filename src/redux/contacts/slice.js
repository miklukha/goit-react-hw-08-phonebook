// import { createReducer, combineReducers, createSlice } from '@reduxjs/toolkit';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://62ce7c73486b6ce826460c2d.mockapi.io';

// export async function fetchContacts() {
//   const { data } = await axios.get(`/contacts`);
//   return data;
// }

// export async function fetchBookById(bookId) {
//   const { data } = await axios.get(`/books/${bookId}?_expand=author`);
//   return data;
// }

// export const fetchBooks = () => async dispatch => {
//   dispatch(booksActions.fetchBooksRequest());

//   try {
//     const books = await bookShelfAPI.fetchBooks();
//     dispatch(booksActions.fetchBooksSuccess(books));
//   } catch (error) {
//     dispatch(booksActions.fetchBooksError(error));
//   }
// };

// const entities = createReducer([], {
//   [fetchContactsAsync.fulfilled]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//   [fetchContactsAsync.pending]: () => true,
//   [fetchContactsAsync.fulfilled]: () => false,
//   [fetchContactsAsync.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContactsAsync.rejected]: (_, action) => action.payload,
//   [fetchContactsAsync.pending]: () => null,
// });

// export default combineReducers({
//   entities,
//   isLoading,
//   error,
// });

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { entities: [], isLoading: false, error: null },
//   extraReducers: {
//     [fetchContactsAsync.fulfilled]: (state, { payload }) =>
//       (state.entities = payload),
//     [fetchContactsAsync.pending]: state => (state.isLoading = true),
//     // [fetchContactsAsync.rejected]: (state, { payload }) =>
//     //   (state.error = payload),
//   },
// });

// export default booksSlice.reducer;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://62ce7c73486b6ce826460c2d.mockapi.io',
//   }),
//   tagTypes: ['Contacts'],
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => 'contacts',
//       providesTags: ['Contacts'],
//     }),
//     addContact: builder.mutation({
//       query: values => ({
//         url: '/contacts',
//         method: 'POST',
//         body: values,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     deleteContact: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//   }),
// });

// export const {
//   useGetContactsQuery,
//   useAddContactMutation,
//   useDeleteContactMutation,
// } = contactsApi;
