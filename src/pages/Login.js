// форма логіну і внизу, "якщо не маєте акаунту, то на форму реєстрації"
import { Link } from 'components/SharedLayout/SharedLayout.styled';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { authOperations } from 'redux/auth';

// import { useForm } from 'react-hook-form';
export function Login() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm();

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1 style={{ marginBottom: '20px' }}>Login</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" style={{ width: '90px' }}>
          Sing In
        </button>
      </form>
      <span>Don't have an account?</span>
      <Link to="/register">Sing up</Link>
    </>
  );
}
