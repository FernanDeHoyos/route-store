import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ProductCards } from './ProductCards';
import { products } from '../data/data';


export const ContentProducts = ({inModal}) => {
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
                  <ProductCards product={product} inModal={inModal} />
                </Grid>
              ))}
            </Grid>
          </Container>
  );
};
