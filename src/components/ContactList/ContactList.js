import { useDispatch } from 'react-redux';
import { remove } from 'redux/contacts/slice';
import { useContacts } from 'redux/contacts/useContacts';
import { List, Item, Data, DeleteButton } from './ContactList.styled';

export function ContactList() {
  const dispatch = useDispatch();
  const { contacts } = useContacts();

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Data>
            {name}: {number}
          </Data>
          <DeleteButton onClick={() => dispatch(remove(id))}>
            Delete
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
}
