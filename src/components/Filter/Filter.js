import { useDispatch } from 'react-redux';
import { change } from 'redux/filter/slice';
import { Input } from 'components/ContactForm/ContactForm.styled';
import { Text } from './Filter.styled';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        onChange={e => dispatch(change(e.currentTarget.value))}
      />
    </>
  );
}
