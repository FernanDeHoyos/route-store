import { Grid, Container, Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import React from 'react';
import { useShopStore } from '../hooks/useShopStore';
import { useNavigate } from 'react-router-dom';
import { centeredFlex } from '../styles/Styles';


const data = [
  {
    id: 1,
    name: 'Hombre',
    image: '/logo_.png', // Reemplaza con la ruta de tu imagen
  },
  {
    id: 2,
    name: 'Mujer',
    image: '/logo_.png', // Reemplaza con la ruta de tu imagen
  },
  {
    id: 3,
    name: 'Niños',
    image: '/logo_.png', // Reemplaza con la ruta de tu imagen
  },
];

export const Categorys = () => {
  const navigate = useNavigate();
  const { SetActiveCategory } = useShopStore();

  const handleCategory = async (category) => {
    try {
      await SetActiveCategory(category.name);
      navigate(`category/${category.name}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container sx={{ background: 'transparent', padding: 0, pb: 3, ...centeredFlex, flexDirection: 'column' }}>
         <Typography
          variant="h4"
          color="black"
          sx={{
            mb: 2,
            fontFamily: 'Arial, sans-serif',
            fontWeight: '200',
          }}
        >
          CATEGORIAS
        </Typography>
      <Grid container spacing={4}>
        {data.map((category) => (
          <Grid
            item
            key={category.id}
            xs={12}
            sm={6}
            md={4}
            lg={4}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <CardActionArea
              onClick={() => handleCategory(category)}
              sx={{
                width: '100%',
                maxWidth: { xs: 200, sm: 300 },
                borderRadius: 2,
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: '100%',
                  objectFit: 'cover',
                  cursor: 'pointer',
                }}
                image={category.image}
                alt={category.name}
              />
              <CardContent
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  height: '40%',
                  background: 'linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7))',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  padding: '10px',
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: '400',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  {category.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
