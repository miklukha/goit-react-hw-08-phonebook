import { Outlet } from 'react-router-dom';
import { Header, Link } from './SharedLayout.styled';

export function SharedLayout() {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">login</Link>
          <Link to="/register">register</Link>
          <Link to="/contacts">contacts</Link>
        </nav>
      </Header>
      <Outlet />
    </>
  );
}
