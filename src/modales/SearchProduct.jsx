import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { ProductCards } from '../components/ProductCards'; 
import { products } from '../data/data';
import { useNavigate } from 'react-router-dom';



export const SearchProduct = ({onClose}) => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 3);

  const handleProductClick = (product) => {
    console.log(product);
    navigate(`/product/${product.id}`);
    onClose(); 
  };

  return (
    <Container>
      <TextField
      fullWidth
      label="Buscar productos"
      variant="outlined"
      value={searchTerm}
      onChange={handleSearchChange}
      sx={{
        marginBottom: 4,
        bgcolor: 'rgba(255, 255, 255, 0.8)', // Fondo más blanco y semi-transparente
        borderRadius: 2,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra para destacar el campo de texto
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.2)', // Color de borde semi-transparente
          },
          '&:hover fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.3)', // Color de borde al hacer hover
          },
          '&.Mui-focused fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.5)', // Color de borde al estar enfocado
          },
        },
        '& .MuiInputLabel-root': {
          color: 'rgba(0, 0, 0, 0.5)', // Color del label
        },
      }}
    />
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid
            item
            key={product.id}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            xs={12}
            sm={6}
            md={4}
            lg={4}
          >
            <ProductCards product={product} inModal onProductClick={handleProductClick} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
