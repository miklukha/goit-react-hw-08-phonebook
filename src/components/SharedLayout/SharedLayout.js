import { Outlet } from 'react-router-dom';
import { Header } from './SharedLayout.styled';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav';

export function SharedLayout() {
  const isLoggedIn = false;

  return (
    <>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Outlet />
    </>
  );
}
