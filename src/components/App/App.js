import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Container, MainTitle, Title } from './App.styled';

export function App() {
  const LS_KEY = 'contacts';
  const isFirstRender = useRef(true);

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (isFirstRender.current) {
      const contactsLS = localStorage.getItem(LS_KEY);

      if (contactsLS) {
        setContacts(JSON.parse(contactsLS));
      }
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const nameInputId = () => nanoid();

  const addContact = (name, number) => {
    const contact = {
      id: nameInputId(),
      name,
      number,
    };

    setContacts(state => {
      const isExistName = state.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isExistName) {
        toast.error(`${name} is already in contacts`);
        return state;
      }

      return [contact, ...state];
    });
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContacts = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm addContact={addContact} />
      <Title>Contacts</Title>
      <Filter onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onClick={deleteContacts} />
      <ToastContainer autoClose={3000} />
    </Container>
  );
}
