import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useShopStore } from '../hooks/useShopStore';
import { Divider } from '@mui/material';
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
  const [productAdd, setProductAdd] = useState('')
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    const storedProduct = localStorage.getItem('activeProduct');
    if (storedProduct) {
      SetActiveProduct(JSON.parse(storedProduct));
    }
  }, []);

  const [anchorEl, setAnchorEl] = useState(null)


    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }


  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddCart = (event) => {
    const productDetails = {
      id: activeProduct.id,
      name: activeProduct.name,
      price: activeProduct.price,
      image: activeProduct.image,
      selectedColor,
      selectedSize,
    };
    SetAddCart(productDetails)
    setIsDisabled(true)
    setProductAdd(productDetails)
    setModal(true)
    setAnchorEl(event.currentTarget)
    console.log('Selected Product Details:', productDetails);
  };

  const handleOnCloseModal = () =>{
      setModal(false)
  }

  if (!activeProduct) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <Grid container spacing={4} sx={{ padding: 4, pt: 15, background: '#fcfeff' }}>
      <Grid item xs={12} md={3} >
        <Typography variant="subtitle2" color="textSecondary">
          Latest Drops
        </Typography>
        <Typography variant="h4" component="h1">
          {activeProduct.name}
        </Typography>
        <Typography variant="body1" sx={{ marginY: 2 }}>
          {activeProduct.description}
        </Typography>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ProductInformation product={activeProduct} />
          <PurchasesReturns />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          pt: 10,
          height: 500,
          ...centeredFlex,
          width: '100%'
        }}
      >
        <Card
          elevation={0}
          sx={{
            ...centeredFlex,
            height: '100%',
            width: '100%',
            flexDirection: 'column', border: '0.5px solid #cccccc',
            borderRadius: 2.5,
            backgroundColor: '#f8fcff',
            textAlign: { xs: 'center', md: 'left' },  }}
        >
          <CardMedia
            component="img"
            image={activeProduct.image}
            alt={activeProduct.name}
            sx={{
              height: '60%', 
              width: '60%', 
              objectFit: 'contain',
            }}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card elevation={0} sx={{ backgroundColor: 'transparent', 
       ...centeredFlex, }}>
          <CardContent>
            <Typography variant="h6" sx={{ 
              fontWeight: '300', 
               }}>
              Select Color
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
            <Typography variant="h6" sx={{ marginTop: 2,fontWeight: '300' }}>
              Select Size
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
                  borderColor:  '#cccccc',
                  background: '#3C1C0C',
                },
              }}
            >
              Select variant
            </Button>
            <ModalCart  anchorEl={anchorEl} handleClose={handleClose} handleOpen={handleOpen} product={productAdd}/>

          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};
