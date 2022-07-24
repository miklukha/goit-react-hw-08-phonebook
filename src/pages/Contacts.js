import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Container, MainTitle, Title } from 'components/App/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

//! Стилі з App

export function Contacts() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getIsLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
      {isLoadingContacts && <h1>Loading...</h1>}
      <ToastContainer autoClose={3000} />
    </Container>
  );
}
