import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ProductCards } from './ProductCards';
import { products } from '../data/data';
import { useNavigate } from 'react-router-dom';


export const ContentProducts = ({inModal}) => {
    const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
          <Container sx={{ background: 'transparent', padding: 0 }}>
            <Grid container spacing={4}>
              {products.map((product) => (
                <Grid
                  item
                  key={product.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4} // Cambiado a 3 para mostrar 4 tarjetas en pantallas grandes
                  sx={{ display: 'flex', justifyContent: 'center' }}
                >
                  <ProductCards product={product} inModal={inModal} onProductClick={handleProductClick}/>
                </Grid>
              ))}
            </Grid>
          </Container>
  );
};
