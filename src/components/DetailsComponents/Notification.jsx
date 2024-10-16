import { Box } from '@mui/material';
import React from 'react';

export const Notification = () => {
  return (
    <Box sx={{
      background: '#000',
      color: '#fff',
      width: '100%',
      height: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '15px',
      fontWeight: 300,
      position: 'fixed',
      top: {xs: 56, sm: 63},
      left: 0,
      zIndex: 1000
    }}>
      ¡Descuentos de hasta{' '}
      <span style={{ fontSize: '24px', color: '#FFD700', margin: '0 5px' }}>
        25%
      </span>
      en toda la tienda!
    </Box>
  );
};
