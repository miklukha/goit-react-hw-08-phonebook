import { useForm } from 'react-hook-form';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { add } from 'redux/store';

export function ContactForm({ addContact }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const onSubmit = data => {
  //   const { name, number } = data;

  //   addContact(name, number);
  //   reset();
  // };

  const onSubmit = data => {
    const { name, number } = data;
    dispatch(add({ name, number }));
    // addContact(name, number);
    reset();
  };

  return (
    // <Form onSubmit={() => dispatch(add())}>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Name
        <Input
          {...register('name', {
            // required: true,
            // pattern: {
            //   value:
            //     /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            //   message: 'incorrect name',
            // },
          })}
        />
      </Label>
      {errors?.name && (
        <span>{errors?.name?.message ?? 'This field is required'}</span>
      )}
      <Label>
        Number
        <Input
          {...register('number', {
            // required: true,
            // pattern: {
            //   value:
            //     /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            //   message: 'incorrect number',
            // },
          })}
        />
      </Label>
      {errors?.number && (
        <span>{errors?.number?.message ?? 'This field is required'}</span>
      )}
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
