import { Name, Phone, DeleteButton, Item, List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLoading, getVisibleContacts } from 'redux/contacts';
import { useEffect } from 'react';
import { contactsOperations } from 'redux/contacts';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    contacts && (
      <List>
        {contacts.map(({ id, name, phone }) => (
          <Item key={id}>
            <Name>{name}: </Name>
            <Phone>{phone}</Phone>
            <DeleteButton
              type="button"
              disabled={isLoading}
              onClick={() => dispatch(contactsOperations.deleteContact(id))}
            >
              Delete
            </DeleteButton>
          </Item>
        ))}
      </List>
    )
  );
}
