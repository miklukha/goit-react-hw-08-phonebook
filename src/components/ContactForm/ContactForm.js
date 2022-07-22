import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Error, Form, Input, Label } from './ContactForm.styled';
import { contactsOperations, getContacts } from 'redux/contacts';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Name
        <Input
          {...register('name', {
            required: true,
            pattern: {
              value:
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
              message:
                "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
            },
          })}
        />
      </Label>
      {errors?.name && (
        <Error>{errors?.name?.message || 'This field is required'}</Error>
      )}
      <Label>
        Number
        <Input
          type="tel"
          {...register('phone', {
            type: 'tel',
            required: true,
            pattern: {
              value:
                /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
              message:
                'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
            },
          })}
        />
      </Label>
      {errors?.number && (
        <Error>{errors?.number?.message || 'This field is required'}</Error>
      )}
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
