import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Grid } from '@mui/material';
import ManIcon from '@mui/icons-material/Man';
import GirlIcon from '@mui/icons-material/Girl';

import { ProductCards } from './ProductCards';
import { products } from '../data/data';

import allIcon from '/cashback.png';
import jeansIcon from '/pants.png';
import tshirtIcon from '/turtleneck.png';
import shoesIcon from '/sneakers.png';
import accessoriesIcon from '/watch.png';

const generos = [
  { value: 'Mujer', label: 'Mujer', icon: <GirlIcon/> },
  { value: 'Hombre', label: 'Hombre', icon:  <ManIcon/>},
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
              startIcon={genero.icon}
              sx={{
                display: 'flex',
                alignItems: 'center',
                paddingRight: 2,
                width: {xs: 80, sm: 80},
                height: {xs: 30, sm: 50},
                fontFamily: 'Arial, Beiruti',
                fontSize: {xs: '0.60rem', sm: '0.80rem'},
                fontWeight: '300',
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
                padding: 1,
                width: {xs: 50, sm: 100},
                height: {xs: 50, sm: 100},
                textTransform: 'none',
                backgroundColor: selectedCategory === category.value ? '#e0f7fa' : 'background.paper',
                color: selectedCategory === category.value ? 'primary.main' : 'text.primary',
                borderColor: '#e0f7fa',
                '&:hover': {
                  backgroundColor: selectedCategory === category.value ? '#b2ebf2' : '#e0f7fa',
                },
                transition: 'background-color 0.3s',
                fontFamily: 'Arial, Beiruti',
                fontSize: {xs: '0.60rem', sm: '0.80rem'},
                fontWeight: '300',
                boxShadow: selectedCategory === category.value ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
              }}
            >
              <img
                src={category.icon}
                alt={category.label}
                style={{
                  width: {sx:'60%', sm: '60%', md:  '60%'},
                  height: '60%',
                  marginBottom: 1,
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
