import { Container } from 'components/Container';
import { Link } from 'components/SharedLayout/SharedLayout.styled';

export function Home() {
  const isLoggedIn = true;

  return (
    <Container>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
        The Contacts Book is a good service used to store your contacts.
      </h1>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
        dicta! A alias dolorum maxime tempore animi nemo ipsa minima nam
        inventore, ullam officia, magnam aliquid. Vel cum consectetur commodi
        voluptates.
      </p>
      <Link
        to={isLoggedIn ? '/contacts' : '/login'}
        style={{ border: '1px solid black', borderRadius: '10px' }}
      >
        Try now
      </Link>
    </Container>
  );
}

// як користувач залогінений, то кнопка перекидає на контакти, якщо ні, то на форму реєстрації
