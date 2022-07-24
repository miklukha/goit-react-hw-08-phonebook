import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'components/ContactForm/ContactForm.styled';
import { Text } from './Filter.styled';
import { changeFilter } from 'redux/contacts';
import { contactsSelectors } from 'redux/contacts';

export function Filter() {
  const dispatch = useDispatch();
  // ??? - Use hook Form
  const value = useSelector(contactsSelectors.getFilter);

  return (
    <>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </>
  );
}
