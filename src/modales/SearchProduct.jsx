import { IconButton, Box, Modal, Container, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCards } from '../components/ProductCards'; 
import { products } from '../data/data';

export const SearchProduct = ({ onClose }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 3);

  const handleProductClick = (product) => {
    navigate(`/product/${product.type}/${product.id}`);
    onClose();
  };

  return (
    <Container sx={{ mt: 10 }}>
      <TextField
        fullWidth
        placeholder='Buscar producto'
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{
          marginBottom: 4,
          bgcolor: 'rgba(255, 255, 255, 1)',
          borderRadius: 2,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          '& fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.2)',
          },
          '&:hover fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.3)',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.5)',
            bgcolor: '#f8fcff',
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
            <ProductCards
              product={product}
              inModal
              onProductClick={handleProductClick}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
