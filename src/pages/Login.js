// форма логіну і внизу, "якщо не маєте акаунту, то на форму реєстрації"
import { Link } from 'components/SharedLayout/SharedLayout.styled';

// import { useForm } from 'react-hook-form';
export function Login() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm();

  return (
    <>
      <h1>Login</h1>
      <form>
        <label>
          E-mail
          <input />
        </label>
        <label>
          Password
          <input />
        </label>
        <button type="submit">Sing In</button>
      </form>
      <p>Don't have an account?</p>
      <Link to="/register">Sing up</Link>
    </>
  );
}
