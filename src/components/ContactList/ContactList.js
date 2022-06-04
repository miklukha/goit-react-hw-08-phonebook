import PropTypes from 'prop-types';
import { List, Item, Data, DeleteButton } from './ContactList.styled';

export function ContactList({ contacts, onClick }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Data>
            {name}: {number}
          </Data>
          <DeleteButton onClick={() => onClick(id)}>Delete</DeleteButton>
        </Item>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
};
