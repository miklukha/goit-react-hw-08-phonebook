// import { createSlice } from '@reduxjs/toolkit';
// import { fetchContacts } from './contacts-operation';

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { entities: [], isLoading: false, error: null },
//   extraReducers: builder => {
//     // Add reducers for additional action types here, and handle loading state as needed
//     builder.addCase(
//       fetchContacts.fulfilled,
//       (state, { payload }) => (state.entities = payload)
//     );
//   },

//   // extraReducers: {
//   //   [fetchContacts.fulfilled]: (state, { payload }) =>
//   //     (state.entities = payload),
//   //   [fetchContacts.pending]: state => (state.isLoading = true),
//   //   // [fetchContactsAsync.rejected]: (state, { payload }) =>
//   //   //   (state.error = payload),
//   // },
// });
