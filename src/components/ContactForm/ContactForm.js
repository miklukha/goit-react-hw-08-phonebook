import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Label, Input, Button } from './ContactForm.styled';

export function ContactForm({ onSubmit }) {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const schema = yup
  //   .object()
  //   .shape({
  //     name: yup.string().required('enter'),
  //     number: yup.number().positive().required(),
  //   })
  //   .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const handleChange = e => {
  //   const { name, value } = e.currentTarget;

  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       throw new Error();
  //   }
  // };

  const handleSubmitOwn = data => {
    // e.preventDefault();
    console.log(data);
    reset();

    // onSubmit(name, number);
    // reset();
  };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    <Form onSubmit={handleSubmit(handleSubmitOwn)}>
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
          // type="text"
          // name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // required
          // value={name}
          // onChange={handleChange}
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
          // type="tel"
          // name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // required
          // value={number}
          // onChange={handleChange}
        />
      </Label>
      {errors?.number && (
        <span>{errors?.number?.message ?? 'This field is required'}</span>
      )}
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
