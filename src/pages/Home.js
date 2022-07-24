import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export function Home() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            The Contacts Book
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
            dicta! A alias dolorum maxime tempore animi nemo ipsa minima nam
            inventore, ullam officia, magnam aliquid.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button
              component={Link}
              to={isLoggedIn ? '/contacts' : '/login'}
              variant="contained"
            >
              Try now
            </Button>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
