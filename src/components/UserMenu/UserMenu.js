import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: 'rgb(25, 118, 210)' }}>
        {name[0].toUpperCase()}
      </Avatar>

      <Button
        variant="outlined"
        sx={{ my: 1, mx: 1.5 }}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </Stack>
  );
}
