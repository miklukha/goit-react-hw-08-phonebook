// import { Link } from 'components/Link/AuthLink.styled';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export function Register() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    dispatch(authOperations.register(data));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/login" variant="body2">
                  {'Already have an account? Sign In'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );

  // return (
  //   <>
  //     <h1 style={{ marginBottom: '20px' }}>Register</h1>
  //     <form
  //       onSubmit={handleSubmit}
  //       style={{
  //         marginBottom: '20px',
  //         display: 'flex',
  //         flexDirection: 'column',
  //         gap: '10px',
  //       }}
  //     >
  //       <label>
  //         Name
  //         <input type="text" name="name" value={name} onChange={handleChange} />
  //       </label>
  //       <label>
  //         E-mail
  //         <input
  //           type="email"
  //           name="email"
  //           value={email}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <label>
  //         Password
  //         <input
  //           type="password"
  //           name="password"
  //           value={password}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <button type="submit" style={{ width: '90px' }}>
  //         Sing Up
  //       </button>
  //     </form>
  //     <span>Have an account?</span>
  //     <Link to="/login">Sing in</Link>
  //   </>
  // );
}
