import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/slice';
import { Button, Error, Form, Input, Label } from './ContactForm.styled';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const onSubmit = async data => {
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
      await addContact(data);
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
