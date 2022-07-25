import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => {
    const { name } = data;
    const isExistName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExistName) {
      toast.info(`${name} is already in contacts`);
      reset();
      return;
    }

    try {
      dispatch(contactsOperations.addContact(data));
      toast.success('Contact has added');
    } catch (error) {
      toast.error('Error when adding material');
      console.log(error);
    }
    reset();
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        mt: 1,
        width: '400px',
        display: 'flex',
        margin: '0 auto',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="outlined-required"
        label="Name"
        name="name"
        autoFocus
        autoComplete="off"
        helperText={
          errors?.name && (errors?.name?.message || 'This field is required')
        }
        {...register('name', {
          required: true,
          pattern: {
            value: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            message:
              "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
          },
        })}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        type="tel"
        id="outlined-required"
        label="Number"
        name="number"
        autoFocus
        autoComplete="off"
        helperText={
          errors?.number &&
          (errors?.number?.message || 'This field is required')
        }
        {...register('number', {
          type: 'tel',
          required: true,
          pattern: {
            value:
              /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            message:
              'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.',
          },
        })}
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add contact
      </Button>
    </Box>
  );
}
