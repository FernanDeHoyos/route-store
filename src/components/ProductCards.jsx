import React from 'react';
import { Card, CardMedia, CardActionArea, Typography } from '@mui/material';
import { Grid, Box } from '@mui/material';

import { useShopStore } from '../hooks/useShopStore';

export const ProductCards = ({ product, onProductClick, inModal }) => {
  const { SetActiveProduct } = useShopStore();
  
  // Obtén la primera imagen del objeto 'images' del producto
  const defaultImage = Object.values(product.images)[0].front;
console.log(defaultImage);
  const handleImageClick = () => {
    SetActiveProduct(product);
    onProductClick(product);
  };

  const discountPercentage = Math.round(((product.price - product.salePrice) / product.price) * 100);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Card 
        sx={{ 
          maxWidth: { xs: '100%', sm: 800, md: 800 }, 
          width: '100%', 
          height: inModal ? '15rem' : '25rem', 
          backgroundColor: 'rgba(240, 240, 240, 0.9)',
          borderRadius: 2,
          '&:hover': {
            boxShadow: 1,
            transform: 'scale(1.001)',
            transition: 'transform 0.3s ease-in-out',
          },
        }}
      >
        <CardActionArea onClick={handleImageClick} sx={{ height: '100%' }}>
          <CardMedia
            component="img"
            sx={{ 
              pt: inModal ? 0 : 0, 
              pb: inModal ? 0 : 2, 
              height: inModal ? 300 : 500, 
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
      </Card>
      
      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="body1" color="black" sx={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', fontWeight: 'bold', mt: 1 }}>
          {product.name} 
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Arial, sans-serif', fontSize: '0.85rem', fontWeight: '300', mb: 0 }}>
          {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Arial, sans-serif', fontSize: '0.85rem', fontWeight: '300', textDecoration: 'line-through', mb: 0 }}>
          Antes ${product.price}
        </Typography>
        <Typography variant="body1" color="primary" sx={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', fontWeight: 'bold', mt: 1 }}>
          Ahora ${product.salePrice} 
        </Typography>
      </Box>
    </Box>
  );
};
