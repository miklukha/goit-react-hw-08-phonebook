import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

export function Navigation() {
  return (
    <nav>
      <Link
        component={RouterLink}
        to="/"
        variant="button"
        color="text.primary"
        noWrap
        sx={{
          fontSize: '16px',
          my: 1,
          mx: 1.5,
          textDecoration: 'none',
          '&:hover': { color: 'rgb(25, 118, 210)' },
          '&:focus': { color: 'rgb(23, 111, 203)' },
        }}
      >
        Home
      </Link>
      <Link
        component={RouterLink}
        to="/contacts"
        variant="button"
        color="text.primary"
        noWrap
        sx={{
          fontSize: '16px',
          my: 1,
          mx: 1.5,
          textDecoration: 'none',
          '&:hover': { color: 'rgb(23, 111, 203)' },
          '&:focus': { color: 'rgb(23, 111, 203)' },
        }}
      >
        Contacts
      </Link>
    </nav>
  );
}
