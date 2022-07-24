import { Name, Phone, DeleteButton, Item, List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import { contactsOperations } from 'redux/contacts';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const isLoading = useSelector(contactsSelectors.getIsLoading);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    contacts && (
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Name>{name}: </Name>
            <Phone>{number}</Phone>
            <DeleteButton
              type="button"
              disabled={isLoading}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </DeleteButton>
          </Item>
        ))}
      </List>
    )
  );
}
