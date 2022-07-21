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
      <h1 style={{ marginBottom: '20px' }}>Login</h1>
      <form
        style={{
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <label>
          E-mail
          <input />
        </label>
        <label>
          Password
          <input />
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
