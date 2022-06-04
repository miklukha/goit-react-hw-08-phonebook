import { Input } from 'components/ContactForm/ContactForm.styled';
import { Text } from './Filter.styled';

export function Filter({ onChange }) {
  return (
    <>
      <Text>Find contacts by name</Text>
      <Input type="text" onChange={onChange} />
    </>
  );
}
