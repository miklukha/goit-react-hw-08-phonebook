import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';
import { createAsyncComponent } from 'helpers/createAsyncComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from 'redux/auth';
import { PublicRoute } from 'components/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { authSelectors } from 'redux/auth';

const Home = createAsyncComponent('Home');
const Login = createAsyncComponent('Login');
const Register = createAsyncComponent('Register');
const Contacts = createAsyncComponent('Contacts');

export function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            path="/"
            element={
              <PublicRoute index>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={isLoggedIn ? <Contacts /> : <Home />} />
        </Route>
      </Routes>
    </>
  );
}
