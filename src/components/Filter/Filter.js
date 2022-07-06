import PropTypes from 'prop-types';
import { Input } from 'components/ContactForm/ContactForm.styled';
import { Text } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { change } from 'redux/store';

export function Filter({ onChange }) {
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

Filter.propTypes = {
  onChange: PropTypes.func,
};
