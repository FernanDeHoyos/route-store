import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import { useShopStore } from '../hooks/useShopStore';
import { Alert, Divider } from '@mui/material';
import { ProductInformation } from '../components/DetailsComponents/ProductInformation';
import { PurchasesReturns } from '../components/DetailsComponents/PurchasesReturns';
import Footer from '../components/Footer';
import { centeredFlex } from '../styles/Styles';
import { ModalCart } from '../modales/ModalCart';

export const DetailsProduct = () => {
  const { activeProduct } = useSelector((state) => state.shop);
  const { SetActiveProduct, SetAddCart } = useShopStore();
  const [selectedColor, setSelectedColor] = useState('');
  const [modal, setModal] = useState(false);
  const [productAdd, setProductAdd] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [displayedImage, setDisplayedImage] = useState('');
  const [isAlert, setIsAlert] = useState(false);

  useEffect(() => {
    const storedProduct = localStorage.getItem('activeProduct');
    if (storedProduct) {
      SetActiveProduct(JSON.parse(storedProduct));
    }
  }, []);

  useEffect(() => {
    if (activeProduct && selectedColor) {
      setDisplayedImage(activeProduct.images[selectedColor]);
    } else if (activeProduct) {
      setDisplayedImage(Object.values(activeProduct.images)[0]);
    }
  }, [activeProduct, selectedColor]);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddCart = (event) => {
    const productsFromStorage = JSON.parse(localStorage.getItem('productsCart')) || [];
    const productDetails = {
      id: activeProduct.id,
      name: activeProduct.name,
      price: activeProduct.price,
      image: displayedImage,
      quantity: 1,
      selectedColor,
      selectedSize,
    };

    // Verificar si el producto ya está en el carrito
    const productExists = productsFromStorage.some(product => 
      product.id === productDetails.id && 
      product.selectedColor === productDetails.selectedColor && 
      product.selectedSize === productDetails.selectedSize
    );

    if (!productExists) {
      // Si el producto no está en el carrito, agregarlo
      SetAddCart(productDetails);
      setIsDisabled(true);
      setProductAdd(productDetails);
      setModal(true);
      setAnchorEl(event.currentTarget);
    } else {
      setIsAlert(true);
      console.log('Product already in cart');
    }
  };

  const handleOnCloseModal = () => {
    setModal(false);
  };

  if (!activeProduct) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <>
      <Grid container spacing={4} sx={{ padding: 4, pt: 15, background: '#fcfeff' }}>
        <Grid item xs={12} md={3} sx={{ ...centeredFlex, flexDirection: 'column' }}>
         
          <Typography variant="h4" component="h1">
            {activeProduct.name}
          </Typography>
          <Typography variant="body1" sx={{ marginY: 2 }}>
            {activeProduct.description}
          </Typography>
          <Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
            <ProductInformation product={activeProduct} />
            <PurchasesReturns />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} sx={{ pt: 10, height: 500, ...centeredFlex, width: '100%' }}>
          <Card
            elevation={0}
            sx={{
              ...centeredFlex,
              height: '100%',
              width: '100%',
              flexDirection: 'column',
              border: '0.5px solid #cccccc',
              borderRadius: 2.5,
              backgroundColor: '#f8fcff',
              textAlign: { xs: 'center', md: 'left' },
              overflow: 'hidden', // Añadido para asegurar que la imagen no se desborde
            }}
          >
            <InnerImageZoom
              src={displayedImage}
              zoomSrc={displayedImage}
              zoomScale={2}
              alt={activeProduct.name}
              width={400} // Ancho máximo permitido para la imagen dentro de la card
              height={400} // Altura máxima permitida para la imagen dentro de la card
              zoomType="click" // Zoom al hacer clic
              fadeDuration={150} // Duración de la transición de desvanecimiento en milisegundos
              hideHint={true} // Mostrar la lupa de aumento
              className="inner-image-zoom" // Clase personalizada para estilizar el componente
              style={{
                maxHeight: '100%', // Limitar la altura máxima de la imagen dentro de la card
                maxWidth: '100%', // Limitar el ancho máximo de la imagen dentro de la card
                objectFit: 'contain', // Ajustar para mantener la relación de aspecto y ajustar la imagen dentro del contenedor
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card elevation={0} sx={{ backgroundColor: 'transparent', ...centeredFlex }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: '300' }}>
                Color
              </Typography>
              <div>
                {activeProduct.colors && activeProduct.colors.map((color) => (
                  <Button
                    key={color}
                    variant="outlined"
                    onClick={() => handleColorClick(color)}
                    sx={{
                      width: '45%',
                      marginRight: 1,
                      marginBottom: 1,
                      background: '#f8fcff',
                      fontFamily: 'Arial, Beiruti',
                      fontSize: '0.75rem',
                      fontWeight: '300',
                      color: 'black',
                      borderColor: selectedColor === color ? '#00bcd4' : '#cccccc',
                      '&:hover': {
                        borderColor: selectedColor === color ? '#00bcd4' : '#cccccc',
                      },
                    }}
                  >
                    {color}
                  </Button>
                ))}
              </div>
              <Divider sx={{ pt: 3 }} />
              <Typography variant="h6" sx={{ marginTop: 2, fontWeight: '300' }}>
                Seleccione talla
              </Typography>
              <div>
                {activeProduct.sizes && activeProduct.sizes.map((size) => (
                  <Button
                    key={size}
                    variant="outlined"
                    onClick={() => handleSizeClick(size)}
                    sx={{
                      width: '45%',
                      marginRight: 1,
                      marginBottom: 1,
                      background: '#f8fcff',
                      fontSize: '0.75rem',
                      fontWeight: '300',
                      color: 'black',
                      borderColor: selectedSize === size ? '#00bcd4' : '#cccccc',
                      '&:hover': {
                        borderColor: selectedSize === size ? '#00bcd4' : '#cccccc',
                      },
                    }}
                  >
                    {size}
                  </Button>
                ))}
              </div>
              <Divider sx={{ pt: 3 }} />
              <Typography variant="h4" sx={{ marginTop: 4, fontWeight: '300' }}>
                ${activeProduct.price}
              </Typography>
              <Button 
                variant="contained" 
                disabled={!selectedColor || !selectedSize || isDisabled}
                fullWidth 
                onClick={handleAddCart}
                sx={{
                  marginRight: 1,
                  marginBottom: 1,
                  background: '#000',
                  fontSize: '0.75rem',
                  fontWeight: '300',
                  color: 'white',
                  borderColor: '#cccccc',
                  '&:hover': {
                    borderColor: '#cccccc',
                    background: '#3C1C0C',
                  },
                }}
              >
                Seleccionar
              </Button>
              {isAlert && (
                <Alert variant="outlined" severity="warning">
                  Ya se encuentra agregado en su carrito
                </Alert>
              )}
              <ModalCart anchorEl={anchorEl} handleClose={handleClose} handleOpen={handleOpen} product={productAdd} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </>
  );
};
