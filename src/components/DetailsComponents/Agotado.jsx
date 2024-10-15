import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

export const Agotado = () => {
  return (
    <Grid container sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }} >
        <Box
         sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        mt: 5,
        borderRadius: 2,
      }}
    >
      <img 
        src={'/agotado.png'} 
        alt="No disponible" 
        style={{ maxWidth: '200px', marginBottom: '16px', borderRadius: '8px' }} 
      />
      <Typography variant="h6" align="center" color="textSecondary" sx={{ marginBottom: 2 }}>
        ¡Ups! Parece que estas prendas están agotadas.
      </Typography>
      
    </Box>
    </Grid>
  );
};
