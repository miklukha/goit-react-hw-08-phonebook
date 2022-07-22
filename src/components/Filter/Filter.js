import { useDispatch } from 'react-redux';
import { Input } from 'components/ContactForm/ContactForm.styled';
import { Text } from './Filter.styled';
import { changeFilter } from 'redux/contacts';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </>
  );
}
