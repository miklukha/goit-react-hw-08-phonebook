// форма реєстрації і внизу, "якщо вже маєте акаунт, то на форму логіну"

import { Link } from 'components/SharedLayout/SharedLayout.styled';

export function Register() {
  return (
    <>
      <h1>Login</h1>
      <form>
        <label>
          Name
          <input />
        </label>
        <label>
          E-mail
          <input />
        </label>
        <label>
          Password
          <input />
        </label>
        <button type="submit">Sing Up</button>
      </form>
      <p>Have an account?</p>
      <Link to="/login">Sing in</Link>
    </>
  );
}
