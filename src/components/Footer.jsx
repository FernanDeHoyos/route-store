import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#101010', color: 'white', position: 'static', py: 4,   }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Arial, Beiruti', fontWeight: '300' }}>
              ROUTE 66 STORE
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Arial, Beiruti', fontSize: '0.85rem', fontWeight: '300' }}>
              Nuestra motivación es sorprenderte con los mejores productos.
            </Typography>
            <Box mt={2}>
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit">
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={8} md={8}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Arial, Beiruti', fontWeight: '300' }}>
              NUESTRAS SEDES
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body2" sx={{ fontFamily: 'Arial, Beiruti', fontSize: '0.85rem', fontWeight: '300' }}>
                  <strong>VALLEDUPAR CESAR</strong>
                  <br />
                  Cra 16 #25a-05 piso 2, Barrio 12 de octubre
                  <br />
                  Email: info@bausi.co
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body2" sx={{ fontFamily: 'Arial, Beiruti', fontSize: '0.85rem', fontWeight: '300' }}>
                  <strong>BARRANQUILLA ATLANTICO</strong>
                  <br />
                  Calle 53c # 22-04, Barrio San Isidro
                  <br />
                  Email: info@bausi.co
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body2" sx={{ fontFamily: 'Arial, Beiruti', fontSize: '0.85rem', fontWeight: '300' }}>
                  <strong>CARTAGENA BOLIVAR</strong>
                  <br />
                  Cr 68 # 31-24 Piso 3, Barrio La Castellana
                  <br />
                  Email: info@bausi.co
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="body2" sx={{ fontFamily: 'Arial, Beiruti', fontSize: '0.85rem', fontWeight: '300' }}>
                  <strong>MONTERIA CORDOBA</strong>
                  <br />
                  Calle 34 # 3-35, Centro
                  <br />
                  Email: info@bausi.co
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
        <Typography 
        variant="body2" 
        color="Window" 
        sx={{ 
          fontFamily: 'Arial, Beiruti', 
          fontSize: '0.85rem', 
          fontWeight: '300',
          '& a': {
            textDecoration: 'none',
            color: '#3498db',
            fontWeight: 600,
            transition: 'color 0.3s ease, text-shadow 0.3s ease',
            '&:hover': {
              color: '#1abc9c',
              textShadow: '0px 0px 5px rgba(26, 188, 156, 0.5)',
            },
          },
        }}
      >
        ROUTE 66 STORE © 2024 DESARROLLADO POR: <a href="https://github.com/FernanDeHoyos">FernanDeHoyos</a>
      </Typography>
          <Box>
            <img src="https://via.placeholder.com/50x30" alt="Visa" style={{ marginRight: '8px' }} />
            <img src="https://via.placeholder.com/50x30" alt="Mastercard" style={{ marginRight: '8px' }} />
            <img src="https://via.placeholder.com/50x30" alt="PayPal" style={{ marginRight: '8px' }} />
            <img src="https://via.placeholder.com/50x30" alt="American Express" style={{ marginRight: '8px' }} />
            <img src="https://via.placeholder.com/50x30" alt="VISA Electron" style={{ marginRight: '8px' }} />
            <img src="https://via.placeholder.com/50x30" alt="Maestro" style={{ marginRight: '8px' }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
