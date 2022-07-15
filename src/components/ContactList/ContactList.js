import { useDeleteContactMutation } from 'redux/contacts/slice';
import { useContacts } from 'redux/contacts/useContacts';
import { Name, Phone, DeleteButton, Item, List } from './ContactList.styled';

export function ContactList() {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const contacts = useContacts();

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
              onClick={() => deleteContact(id)}
            >
              Delete
            </DeleteButton>
          </Item>
        ))}
      </List>
    )
  );
}
