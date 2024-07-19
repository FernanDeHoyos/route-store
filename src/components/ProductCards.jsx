import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { useShopStore } from '../hooks/useShopStore';
import { Grid, Box } from '@mui/material';

export const ProductCards = ({ product, onProductClick, inModal }) => {
  const { SetActiveProduct } = useShopStore();
  
  // Obtén la primera imagen del objeto 'images' del producto
  const defaultImage = Object.values(product.images)[0];

  const handleImageClick = () => {
    SetActiveProduct(product);
    onProductClick(product);
  };

  const discountPercentage = Math.round(((product.price - product.salePrice) / product.price) * 100);

  return (
    <Card 
      sx={{ 
        maxWidth: { xs: '100%', sm: 500 }, 
        width: '100%', 
        height: inModal ? '15rem' : '30rem', 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 2,
        boxShadow: 3,
        '&:hover': {
          boxShadow: 6,
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease-in-out',
        },
      }}
    >
      <CardActionArea onClick={handleImageClick} sx={{ height: inModal ? '60%' : '70%' }}>
        <CardMedia
          component="img"
          sx={{ 
            pt: inModal ? 1 : 2, 
            pb: inModal ? 1 : 2, 
            height: '100%', 
            objectFit: 'contain',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            borderRadius: '8px 8px 0 0',
          }}
          image={defaultImage}
          alt={product.name}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 8,
            left: 8,
            backgroundColor: '#101011',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '8px',
            fontSize: '0.85rem',
            fontWeight: 'bold',
          }}
        >
          {discountPercentage}% OFF
        </Box>
      </CardActionArea>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#0000', alignItems: 'center', textAlign: 'center', p: inModal ? 2 : 1, pt: inModal ? 1 : 3 }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', fontWeight: 'bold' }}>
          {product.name}
        </Typography>
        <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mt: inModal ? 0 : 1 }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Arial, sans-serif', fontSize: '0.85rem', fontWeight: '300', textDecoration: 'line-through', mb: inModal ? 0 : 1 }}>
            Antes ${product.price}
          </Typography>
          <Typography variant="body1" color="primary" sx={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', fontWeight: 'bold' }}>
            Ahora ${product.salePrice} 
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};
