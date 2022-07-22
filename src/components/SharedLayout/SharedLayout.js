import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
