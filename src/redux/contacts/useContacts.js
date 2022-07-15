import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/getFilter';
import { useGetContactsQuery } from 'redux/contacts/slice';

export const useContacts = () => {
  const { data: contacts } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  return getVisibleContacts();
};
