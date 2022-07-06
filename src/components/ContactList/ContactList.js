import PropTypes from 'prop-types';
import { List, Item, Data, DeleteButton } from './ContactList.styled';
import { remove } from 'redux/store';
import { useDispatch } from 'react-redux';

export function ContactList({ contacts, onClick }) {
  const dispatch = useDispatch();

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
