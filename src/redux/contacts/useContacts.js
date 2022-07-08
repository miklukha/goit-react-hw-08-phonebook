import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/getContacts';
import { getFilter } from 'redux/filter/getFilter';

export const useContacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return {
    contacts: visibleContacts,
  };
};
