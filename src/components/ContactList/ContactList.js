import { List, Item } from './ContactList.styled';
import PropTypes from 'prop-types';

export function ContactList({ contacts }) {
  return (
    <List>
      {contacts.map(({ id, name }) => (
        <Item key={id}>{name}</Item>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
