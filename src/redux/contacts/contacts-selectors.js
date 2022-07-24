import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.entities;

const getFilter = state => state.contacts.filter;

const getIsLoading = state => state.contacts.IsLoading;

const getVisibleContacts = createSelector(
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

export const contactsSelectors = {
  getVisibleContacts,
  getIsLoading,
  getFilter,
  getContacts,
};
