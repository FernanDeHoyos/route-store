import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ProductCards } from './ProductCards';
import { products } from '../data/data';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

import allIcon from '/cashback.png';
import jeansIcon from '/pants.png';
import tshirtIcon from '/turtleneck.png';
import shoesIcon from '/sneakers.png';
import accessoriesIcon from '/watch.png';

const generos = [
  { value: 'Mujer', label: 'Mujer' },
  { value: 'Hombre', label: 'Hombre' },
];
const categories = [
  { value: 'all', label: 'Todos', icon: allIcon },
  { value: 'Jeans', label: 'Jeans', icon: jeansIcon },
  { value: 'Camisetas', label: 'Camisetas', icon: tshirtIcon },
  { value: 'Calzado', label: 'Calzado', icon: shoesIcon },
  { value: 'Accesorios', label: 'Accesorios', icon: accessoriesIcon },
];

export const ContentProducts = ({ inModal }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGenero, setSelectedGenero] = useState('Hombre');

  const handleGeneroChange = (genero) => {
    setSelectedGenero(genero);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter(
          (product) =>
            product.type === selectedCategory &&
            product.genero === selectedGenero
        );

  const handleProductClick = (product) => {
    console.log(product);
    navigate(`/product/${product.id}`);
  };

  return (
    <Container sx={{ background: 'transparent', padding: 0 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            mb: 2,
            gap: 2,
          }}
        >
          {generos.map((genero) => (
            <Button
              key={genero.value}
              onClick={() => handleGeneroChange(genero.value)}
              variant={selectedGenero === genero.value ? 'contained' : 'outlined'}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                width: 100,
                height: 50,
                textTransform: 'none',
                backgroundColor: selectedGenero === genero.value ? '#e0f7fa' : 'background.paper',
                color: selectedGenero === genero.value ? 'primary.main' : 'text.primary',
                borderColor: '#e0f7fa',
                '&:hover': {
                  backgroundColor: selectedGenero === genero.value ? '#b2ebf2' : '#e0f7fa',
                },
                transition: 'background-color 0.3s',
                boxShadow: selectedGenero === genero.value ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
              }}
            >
              {genero.label}
            </Button>
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          {categories.map((category) => (
            <Button
              key={category.value}
              onClick={() => handleCategoryChange(category.value)}
              variant={selectedCategory === category.value ? 'contained' : 'outlined'}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                width: 100,
                height: 110,
                textTransform: 'none',
                backgroundColor: selectedCategory === category.value ? '#e0f7fa' : 'background.paper',
                color: selectedCategory === category.value ? 'primary.main' : 'text.primary',
                borderColor: '#e0f7fa',
                '&:hover': {
                  backgroundColor: selectedCategory === category.value ? '#b2ebf2' : '#e0f7fa',
                },
                transition: 'background-color 0.3s',
                boxShadow: selectedCategory === category.value ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
              }}
            >
              <img
                src={category.icon}
                alt={category.label}
                style={{
                  width: '60%',
                  height: '60%',
                  marginBottom: 8,
                }}
              />
              {category.label}
            </Button>
          ))}
        </Box>
      </Box>
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid
            item
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={4}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <ProductCards
              product={product}
              inModal={inModal}
              onProductClick={handleProductClick}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
