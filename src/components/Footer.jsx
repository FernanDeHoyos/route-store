import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#101010', color: 'white', position: 'static', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Arial, Beiruti', fontWeight: '300' }}>
              ROUTE 66 STORE
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Arial, Beiruti', fontSize: '0.85rem', fontWeight: '300' }}>
              Tu ruta hacia la moda comienza aquí.
            </Typography>
            <Box mt={2}>
              <Link href="https://web.facebook.com/profile.php?id=61562055293980" target="_blank" color="inherit">
                <IconButton color="inherit">
                  <FacebookIcon />
                </IconButton>
              </Link>
              <Link href="https://www.instagram.com/route66.store/" target="_blank" color="inherit">
                <IconButton color="inherit">
                  <InstagramIcon />
                </IconButton>
              </Link>
              <Link href="https://wa.me/3136601690" target="_blank" color="inherit">
                <IconButton color="inherit">
                  <WhatsAppIcon />
                </IconButton>
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={8} md={8}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Arial, Beiruti', fontWeight: '300' }}>
              NUESTRA SEDE
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12}>
                <Typography variant="body2" sx={{ fontFamily: 'Arial, Beiruti', fontSize: '0.85rem', fontWeight: '300' }}>
                  <strong>MONTERIA CORDOBA</strong>
                  <br />
                  La Pradera, Manzana 104, Sector 1
                  <br />
                  Email: info@routestore.co
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
            <img src="/dvp.png" alt="Visa" style={{ marginRight: '8px', width: '50px', height: '30px' }} />
            <img src="/nequi.png" alt="Mastercard" style={{ marginRight: '8px', width: '50px', height: '30px' }} />
            <img src="/Bancolombia.png" alt="PayPal" style={{ marginRight: '8px', width: '50px', height: '30px' }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
