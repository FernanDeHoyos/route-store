import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ProductCards } from './ProductCards';
import { products } from '../data/data';
import { useNavigate } from 'react-router-dom';
import { Box, Button, ButtonGroup } from '@mui/material';


import allIcon from '/cashback.png';
import jeansIcon from '/pants.png';
import tshirtIcon from '/turtleneck.png';
import shoesIcon from '/sneakers.png';
import accessoriesIcon from '/watch.png';

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

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.type === selectedCategory);

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
          '& > *': {
            m: 1,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            mb: 5,
            gap: { xs: 2, sm: 3, md: 4 }, // Ajusta el espacio entre los botones según el tamaño de la pantalla
          }}
        >
          {categories.map(category => (
            <Button
              key={category.value}
              onClick={() => handleCategoryChange(category.value)}
              variant={selectedCategory === category.value ? 'contained' : 'outlined'}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                width: { xs: 80, sm: 80, md: 100 }, // Ajusta el ancho del botón según el tamaño de la pantalla
                height: { xs: 80, sm: 90, md: 110 }, // Ajusta la altura del botón según el tamaño de la pantalla
                textTransform: 'none',
                backgroundColor: selectedCategory === category.value ? '#f8fcff' : 'background.paper', // Cambia el color de fondo
                color: selectedCategory === category.value ? 'primary.dark' : 'text.primary', // Cambia el color del texto
                borderColor: '#f8fcff',
                '&:hover': {
                  backgroundColor: selectedCategory === category.value ? '#f8fcff' : '#f8fcff', // Cambia el color de fondo al pasar el cursor
                  
                },
              }}
            >
              <img
                src={category.icon}
                alt={category.label}
                style={{
                  width: '60%', // Ajusta el tamaño del ícono según el tamaño del botón
                  height: '60%',
                  marginBottom: 8
                }}
              />
              <Box sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>
                {category.label}
              </Box>
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
            <ProductCards product={product} inModal={inModal} onProductClick={handleProductClick} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
