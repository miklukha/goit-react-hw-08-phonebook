import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './SharedLayout.styled';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export function SharedLayout() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

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
