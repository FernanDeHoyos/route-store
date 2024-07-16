import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { useShopStore } from '../hooks/useShopStore';
import { Grid } from '@mui/material';

export const ProductCards = ({ product, onProductClick, inModal }) => {
  const { SetActiveProduct } = useShopStore();
  
  // Obtén la primera imagen del objeto 'images' del producto
  const defaultImage = Object.values(product.images)[0];

  const handleImageClick = () => {
    SetActiveProduct(product);
    onProductClick(product);
  };

  return (
    <Card 
      sx={{ 
        maxWidth: { xs: '100%', sm: 500 }, 
        width: '100%', 
        height: inModal ? '15rem' : '30rem', 
        backgroundColor: inModal ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.8)',
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
          image={defaultImage}
          alt={product.name}
        />
      </CardActionArea>
      <CardContent sx={{
        display: 'flex', 
        flexDirection: inModal ? 'column' : 'row', 
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
        <Typography gutterBottom variant="p" component="div" sx={{
              fontFamily: 'Arial, Beiruti',
                fontSize: '0.85rem', 
                fontWeight: '300',
            }}>
          {product.name}
        </Typography>
        <Grid item sx={{
        display: 'flex', 
        flexDirection: inModal ? 'column' : 'row', 
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
        <Typography variant="body2" color="text.secondary" sx={{
              fontFamily: 'Arial, Beiruti',
                fontSize: '0.85rem', 
                fontWeight: '300',
                pr: 3,
                textDecoration: 'line-through' 
            }}>
          Antes ${`${product.price}`}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
              fontFamily: 'Arial, Beiruti',
                fontSize: '0.85rem', 
                fontWeight: '300',
            }}>
          Ahora ${`${product.salePrice}`}
        </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};
