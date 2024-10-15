import { useMediaQuery, useTheme, Box, Container, Typography, CardMedia, Button, Grid } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { centeredFlex } from '../styles/Styles';

const images = [
  { pcSrc: '/carrusell/bg_m.png', mobileSrc: '/carrusell/bg_mujeres_m.png', alt: 'Landing 1' },
  { pcSrc: '/carrusell/bg_hombres.png', mobileSrc: '/carrusell/bg_hombres_m.png', alt: 'Landing 2' },
  { pcSrc: '/carrusell/bg_relojes.png', mobileSrc: '/carrusell/bg_relojes_m.png', alt: 'Landing 3' },
];

export const Landing = ({newCollectionRef}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCategoryClick = () => {
    if (newCollectionRef.current) {
      console.log('Scrolling to collection');
      newCollectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Reference not found');
    }
  };

  return (
    <Box
      borderRadius={'30px'}
      sx={{
        width: '100%',
        padding: { xs: 2, sm: 2 },
        height: { xs: '88vh', sm: '100vh' },
        paddingTop: { xs: '56px', sm: '34px' }, // Ajusta el espacio según la altura del navbar
        ...centeredFlex,
      }}
    >
      <Carousel
        showArrows
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        stopOnHover
        dynamicHeight={false}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            borderRadius={3}
            sx={{
              overflow: 'hidden', 
              maxWidth: 'none',
              maxHeight: '90%',
            }}
          >
            <CardMedia
              component="img"
              sx={{
                objectFit: 'cover',
                height: '90vh', 
                width: '100%',
                cursor: 'pointer',
              }}
              image={isMobile ? image.mobileSrc : image.pcSrc}
              alt={image.alt}
            />
          </Box>
        ))}
      </Carousel>

      {/* Content and Button */}
      <Container
        sx={{
          position: 'absolute',
          bottom: { xs: '20%', sm: '10%' },
          left: '50%',
          pl: { xs: 3 },
          transform: 'translateX(-50%)',
          zIndex: 1,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <Grid item>
          <Typography
            variant="h3"
            color="white"
            sx={{
              mt: 2,
              fontFamily: 'Arial, sans-serif',
              fontWeight: '200',
            }}
          >
            Nueva coleccion
          </Typography>
          <Typography
            variant="h6"
            color="white"
            sx={{
              mt: 2,
              fontSize: { xs: '1rem', md: '1.5rem' },
              fontFamily: 'Arial, sans-serif',
              fontWeight: '200',
            }}
          >
            Descubre nuestra categoría de ropa para damas y caballeros
          </Typography>
        </Grid>
        <Button
          sx={{ 
            mt: 2, 
            alignSelf: 'flex-start', 
            bgcolor: 'white', 
            color: 'black', 
            fontSize: '0.75rem',
            fontWeight: '300',
            '&:hover': {
              borderColor: '#cccccc',
              background: '#000',
              color: 'white',
            }
          }}
          onClick={handleCategoryClick}
        >
          Ver colleccion
        </Button>
      </Container>
    </Box>
  );
};
