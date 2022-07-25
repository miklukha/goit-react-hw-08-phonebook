import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export function Home() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          pt: 8,
          pb: 6,
        }}
      >
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
      </Box>
    </Container>
  );
}
