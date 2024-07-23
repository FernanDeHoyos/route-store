import { Carousel } from 'react-responsive-carousel';
import {Box, Container, Typography, CardMedia} from '@mui/material';

import { centeredFlex } from '../styles/Styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  { src: '/landing.jpg', alt: 'Landing 1' },
  { src: '/landing.jpg', alt: 'Landing 2' },
  { src: '/landing.jpg', alt: 'Landing 3' },
];

export const Landing = () => {
  return (
    <Box
      sx={{
        width: '100%',
        marginTop: {xs: 0, md:5, sm: 10, lg:10},
        p: 0,
        height: { xs: '300px', md: '600px' },
        overflow: 'hidden',
        position: 'relative', // Ensure positioning context for the overlaying text
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
          <CardMedia
            key={index}
            component="img"
            sx={{ 
              objectFit: 'cover',
              height: '100%', 
              width: '100%', 
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }}
            image={image.src}
            alt={image.alt}
          />
        ))}
      </Carousel>
      <Container
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          textAlign: 'center',
          ...centeredFlex,

        }}
      >
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
          Bienvenido a Route 66 store 
        </Typography>
      </Container>
    </Box>
  );
};
