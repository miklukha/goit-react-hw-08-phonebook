// import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
// import defaultAvatar from './default-avatar.png';

export function UserMenu() {
  // const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUsername);
  // const avatar = defaultAvatar;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span style={{ fontWeight: 700, marginRight: 12 }}>Welcome</span>
      <button type="button">Log Out</button>
    </div>
  );
}
//<button type="button" onClick={() => dispatch(authOperations.logOut())}>
