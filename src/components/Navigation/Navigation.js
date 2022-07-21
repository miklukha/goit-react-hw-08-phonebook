import { Link } from 'components/SharedLayout/SharedLayout.styled';

export function Navigation() {
  return (
    <nav>
      <Link to="/" style={{ marginRight: '20px' }}>
        Home
      </Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  );
}
