import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { centeredFlex } from '../styles/Styles';

export const Landing = () => {
  return (
    <Box
      sx={{
        width: '100%',
        marginTop: 10,
        p:0,
        height: { xs: '300px', md: '600px' },
        backgroundImage: 'url(/landing.jpg)',
        backgroundSize: 'cover',
        overflowY: 'clip',
        backgroundPosition: 'center',
        ...centeredFlex
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
            fontFamily: 'Arial, Beiruti',
            fontWeight: '300',
          }}
        >
          Welcome to Route 66 Store
        </Typography>
      </Container>
    </Box>
  );
};
