import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Label, Input, Button } from './ContactForm.styled';

export function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => {
    const { name, number } = data;

    setName(name);
    setNumber(number);
    addContact(name, number);

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
              message: 'incorrect name',
            },
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
            required: true,
            pattern: {
              value:
                /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
              message: 'incorrect number',
            },
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
