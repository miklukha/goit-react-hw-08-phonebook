import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.entities;

const getFilter = state => state.contacts.filter;

export const getIsLoading = state => state.contacts.IsLoading;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
  }
);

//     const normalizedFilter = filter.toLowerCase();

//     if (contacts) {
//       return contacts.filter(contact =>
//         contact.name.toLowerCase().includes(normalizedFilter)
//       );
//     }
