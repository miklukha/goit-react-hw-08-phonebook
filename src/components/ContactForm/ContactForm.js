import React from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
import PropTypes from 'prop-types';

export function ContactForm({ addItem }) {
  return (
    <Form onSubmit={addItem}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Button>Add contact</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  addItem: PropTypes.func,
};
