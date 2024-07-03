import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';

export const ProductCards = ({ product, inModal }) => {
  const handleImageClick = () => {
    // Lógica para redirigir a otra página
    window.location.href = `/product/${product.id}`;
  };

  return (
    <Card 
      sx={{ 
        maxWidth: { xs: '100%', sm: 500 }, 
        width: '100%', 
        height: inModal ? '15rem' : '30rem', 
        backgroundColor: inModal ? 'rgba(255, 255, 255, 0.8)':  'rgba(255, 255, 255, 0.8)',
        '&:hover': {
          boxShadow: 5
        }
      }}
    >
      <CardActionArea onClick={handleImageClick}
       sx={{
        height: inModal ? '60%' : '90%', 
       }}>
        <CardMedia
          component="img"
          sx={{ 
            pt: inModal ? 1 : 5, 
            pb: inModal ? 1 : 5, 
            height: inModal ? '80%' : '80%', 
            objectFit: 'contain',
            backgroundColor: 'transparent',
            cursor: 'pointer',
          }}
          image={product.image}
          alt={product.name}
        />
      </CardActionArea>
      <CardContent sx={{
        display: 'flex', 
        flexDirection: inModal ? 'column' : 'row', 
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
        <Typography gutterBottom variant="p" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${`${product.price}`}
        </Typography>
      </CardContent>
    </Card>
  );
};
