import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ProductCards } from './ProductCards';
import { products } from '../data/data';
import { useNavigate } from 'react-router-dom';
import { MenuItem, Select } from '@mui/material';


export const ContentProducts = ({inModal}) => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryChange = ({target}) => {
      setSelectedCategory(target.value)
    }

    const filteredProducts = selectedCategory === 'all' 
      ? products 
      : products.filter(product => product.type === selectedCategory)

  const handleProductClick = (product) => {
    console.log(product);
    navigate(`/product/${product.id}`);
  };



  return (
          <Container sx={{ background: 'transparent', padding: 0 }}>
            <Select 
            value={selectedCategory}
            onChange={handleCategoryChange}
            displayEmpty
            sx={{marginBottom: 5}}>
                <MenuItem value='all' >All</MenuItem>
                <MenuItem value='Jeans' >Jeans</MenuItem>
                <MenuItem value='Camisetas' >Camisetas</MenuItem>
                <MenuItem value='Calzado' >Calzado</MenuItem>
                <MenuItem value='Accesorios' >Accesorios</MenuItem>
            </Select>
            <Grid container spacing={4}>
              {filteredProducts.map((product) => (
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
