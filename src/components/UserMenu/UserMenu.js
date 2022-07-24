import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ fontWeight: 700, marginRight: 12 }}>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </button>
    </div>
  );
}
//<button type="button" onClick={() => dispatch(authOperations.logOut())}>
