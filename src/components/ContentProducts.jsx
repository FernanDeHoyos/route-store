import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ProductCards } from './ProductCards';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is product 1',
    image: '/logo.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is product 2',
    image: '/logo.jpg',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is product 3',
    image: '/logo.jpg',
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'This is product 4',
    image: '/logo.jpg',
  },
  // Add more products here
];

export const ContentProducts = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid
            item
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={4}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <ProductCards product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
