import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';
import { ProductCards } from './ProductCards';
import { products } from '../data/data';
import { useEffect, useState } from 'react';
import { Agotado } from './DetailsComponents/Agotado';


export const ContentProducts = ({ inModal }) => {
  const location = useLocation();
  const { name, type, productId, } = useParams();
  const navigate = useNavigate();

  const [activeProducts, SetActiveProducts] = useState([])
  const activeCategory = localStorage.getItem('activeCategory');


  const filter = (productGenero, productType, showAll = false) => {
    const filteredProducts = products.filter((product) => {
      // Si ambos 'productGenero' y 'productType' están presentes, filtrar por ambos
      if (productGenero && productType) {
        return product.genero === productGenero && product.type === productType;
      }
      // Si sólo 'productGenero' está presente, filtrar por 'genero'
      if (productGenero) {
        return product.genero === productGenero;
      }
      // Si sólo 'productType' está presente, filtrar por 'type'
      if (productType) {
        return product.type === productType;
      }
      // Si no hay filtros, devolver true (no filtrar)
      return true;
    });

    const productsToShow = showAll ? filteredProducts : filteredProducts.slice(0, 3);
    SetActiveProducts(productsToShow);
  };

  // filtra productos dependiendo de la ruta ya que le componente se usa en diferentes lugares
  useEffect(() => {
    if (location.pathname === `/product/${type}/${productId}`) {
      filter(name, type)
    } else {
      console.log(type);
      filter(name, type, true)
    }
  }, [type])

  const handleProductClick = (product) => {
    navigate(`/product/${product.type}/${product.id}`);
  };

  return (
    <Container sx={{ background: 'transparent', }}>
      <Grid container spacing={4}>
        {activeProducts?.length > 0 && activeProducts.map((product) => (
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

        {!activeProducts?.length && (
          <Agotado/>
        )}
      </Grid>
    </Container>
  );
};
