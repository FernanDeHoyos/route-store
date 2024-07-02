import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const Landing = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '300px', md: '500px' },
        backgroundImage: 'url(/logo.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container>
        <Typography
          variant="h4"
          color="white"
          align="center"
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '10px',
            width: { xs: '90%', md: '90%' },
            fontSize: { xs: '1.5rem', md: '3rem' },
          }}
        >
          Welcome to Route 66 Store
        </Typography>
      </Container>
    </Box>
  );
};
