import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Container, MainTitle, Title } from './App.styled';

export function App() {
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={3000} />
    </Container>
  );
}
