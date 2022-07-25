import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

export function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          pt: 8,
          pb: 6,
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Phonebook
        </Typography>
        <ContactForm />
        <Divider variant="middle" />
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{
            mt: '20px',
          }}
        >
          Contacts
        </Typography>
        {contacts.length !== 0 ? (
          <Stack spacing={2} sx={{ alignItems: 'center' }}>
            <Filter />
            <ContactList />
          </Stack>
        ) : (
          <Typography
            component="p"
            variant="h6"
            color="text.primary"
            align="center"
          >
            You haven't contacts yet...
          </Typography>
        )}
        <ToastContainer autoClose={3000} />
      </Box>
    </Container>
  );
}
