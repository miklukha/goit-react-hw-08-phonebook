import PropTypes from 'prop-types';
import { List, Item, Data, DeleteButton } from './ContactList.styled';
import { remove } from 'redux/store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
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
