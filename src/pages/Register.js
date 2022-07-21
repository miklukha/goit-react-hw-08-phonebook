import { Link } from 'components/SharedLayout/SharedLayout.styled';

export function Register() {
  return (
    <>
      <h1 style={{ marginBottom: '20px' }}>Register</h1>
      <form
        style={{
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
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
        <button type="submit" style={{ width: '90px' }}>
          Sing Up
        </button>
      </form>
      <span>Have an account?</span>
      <Link to="/login">Sing in</Link>
    </>
  );
}
