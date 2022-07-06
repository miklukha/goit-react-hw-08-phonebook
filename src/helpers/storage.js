const LS_KEY = 'contacts';

export function getContactsLS() {
  const contactsLS = localStorage.getItem(LS_KEY);

  if (!contactsLS) {
    return;
  }

  return { contacts: JSON.parse(contactsLS), filter: '' };
}

export function setContactsLS(state) {
  const contactsLS = JSON.stringify(state);
  localStorage.setItem(LS_KEY, contactsLS);
}
