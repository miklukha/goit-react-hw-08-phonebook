import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, contactsSelectors } from 'redux/contacts';

export function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  return (
    <TextField
      id="standard-search"
      label="Find contacts by name"
      type="search"
      variant="standard"
      name="query"
      value={value}
      autoFocus
      autoComplete="off"
      onChange={e => dispatch(changeFilter(e.currentTarget.value))}
    />
  );
}
