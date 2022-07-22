import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';
import { createAsyncComponent } from 'helpers/createAsyncComponent';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';

const Home = createAsyncComponent('Home');
const Login = createAsyncComponent('Login');
const Register = createAsyncComponent('Register');
const Contacts = createAsyncComponent('Contacts');

export function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
