import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const isLoading = useSelector(contactsSelectors.getIsLoading);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    contacts && (
      <Box>
        <Grid item xs={12} md={6}>
          <List>
            {contacts.map(({ id, name, number }) => (
              <ListItem
                key={id}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '400px',
                }}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    disabled={isLoading}
                    onClick={() => onDeleteContact(id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={name} sx={{ flexBasis: '150px' }} />
                <ListItemText secondary={number} sx={{ flexBasis: '150px' }} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Box>
    )
  );
}
