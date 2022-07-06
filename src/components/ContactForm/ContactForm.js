import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { add } from 'redux/store';
import { Form, Label, Input, Button, Error } from './ContactForm.styled';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    const { name, number } = data;

    dispatch(add({ name, number }));
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
          {...register('number', {
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
