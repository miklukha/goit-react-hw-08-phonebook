import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Container, MainTitle, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  nameInputId = () => nanoid();

  addItem = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.name.value;
    const id = this.nameInputId();

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, id }],
      };
    });
  };

  render() {
    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm addItem={this.addItem} />
        <Title>Contacts</Title>
        <ContactList contacts={this.state.contacts}></ContactList>
      </Container>
    );
  }
}
