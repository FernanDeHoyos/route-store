import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'white', color: 'black', py: 4 }}>
      <Container maxWidth="lg" >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" gutterBottom sx={{fontFamily: 'Arial, Beiruti', 
                fontWeight: '300',}}>
              BAUSI
            </Typography>
            <Typography variant="body2" 
            sx={{fontFamily: 'Arial, Beiruti',
                fontSize: '0.85rem', 
                fontWeight: '300',}}>
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
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" gutterBottom sx={{fontFamily: 'Arial, Beiruti', 
                fontWeight: '300',
                }}>
              ENLACES DE INTERÉS
            </Typography>
            <Link href="#" color="inherit" underline="hover" 
            sx={{
              fontFamily: 'Arial, Beiruti', 
              fontWeight: '300',
              fontSize: '0.85rem', }}>
              Preguntas Frecuentes
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover" 
            sx={{
              fontFamily: 'Arial, Beiruti',
              fontSize: '0.85rem', 
              fontWeight: '300',
            }}>
              Política de privacidad
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover"
            sx={{
              fontFamily: 'Arial, Beiruti',
                fontSize: '0.85rem', 
                fontWeight: '300',
            }}>
              Términos y condiciones
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover"
            sx={{
              fontFamily: 'Arial, Beiruti',
                fontSize: '0.85rem', 
                fontWeight: '300',
            }}>
              Políticas de cambios y/o devoluciones
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" gutterBottom sx={{fontFamily: 'Arial, Beiruti', 
                fontWeight: '300',}}>
              NUESTRAS SEDES
            </Typography>
            <Typography variant="body2" sx={{
              fontFamily: 'Arial, Beiruti',
                fontSize: '0.85rem', 
                fontWeight: '300',
            }}>
              <strong>VALLEDUPAR CESAR</strong>
              <br />
              Cra 16 #25a-05 piso 2, Barrio 12 de octubre
              <br />
              Email: info@bausi.co
            </Typography>
            <Typography variant="body2" mt={2} sx={{
              fontFamily: 'Arial, Beiruti',
                fontSize: '0.85rem', 
                fontWeight: '300',
            }}>
              <strong>BARRANQUILLA ATLANTICO</strong>
              <br />
              Calle 53c # 22-04, Barrio San Isidro
              <br />
              Email: info@bausi.co
            </Typography>
            <Typography variant="body2" mt={2} sx={{
              fontFamily: 'Arial, Beiruti',
                fontSize: '0.85rem', 
                fontWeight: '300',
            }}>
              <strong>CARTAGENA BOLIVAR</strong>
              <br />
              Cr 68 # 31-24 Piso 3, Barrio La Castellana
              <br />
              Email: info@bausi.co
            </Typography>
            <Typography variant="body2" mt={2} sx={{
              fontFamily: 'Arial, Beiruti',
                fontSize: '0.85rem', 
                fontWeight: '300',
            }}>
              <strong>MONTERIA CORDOBA</strong>
              <br />
              Calle 34 # 3-35, Centro
              <br />
              Email: info@bausi.co
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" gutterBottom sx={{fontFamily: 'Arial, Beiruti', 
                fontWeight: '300',}}>
              ENLACES DE INTERÉS
            </Typography>
            <Link href="#" color="inherit" underline="hover" sx={{
              fontFamily: 'Arial, Beiruti',
                fontSize: '0.85rem', 
                fontWeight: '300',
            }}>
              Preguntas Frecuentes
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover" sx={{
              fontFamily: 'Arial, Beiruti',
                fontSize: '0.85rem', 
                fontWeight: '300',
            }}>
              Política de privacidad
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover" sx={{
              fontFamily: 'Arial, Beiruti',
                fontSize: '0.85rem', 
                fontWeight: '300',
            }}>
              Términos y condiciones
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover" sx={{
              fontFamily: 'Arial, Beiruti',
                fontSize: '0.85rem', 
                fontWeight: '300',
            }}>
              Políticas de cambios y/o devoluciones
            </Link>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="textSecondary" sx={{
              fontFamily: 'Arial, Beiruti',
                fontSize: '0.85rem', 
                fontWeight: '300',
            }}>
            BAUSI SAS © 2020 DESARROLLADO POR: Toromejia
          </Typography>
          <Box mt={2}>
            <img src="https://via.placeholder.com/50x30" alt="Visa" />
            <img src="https://via.placeholder.com/50x30" alt="Mastercard" />
            <img src="https://via.placeholder.com/50x30" alt="PayPal" />
            <img src="https://via.placeholder.com/50x30" alt="American Express" />
            <img src="https://via.placeholder.com/50x30" alt="VISA Electron" />
            <img src="https://via.placeholder.com/50x30" alt="Maestro" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
