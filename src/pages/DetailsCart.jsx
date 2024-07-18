import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, Button, Card, Divider, IconButton, TextField, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CardMedia } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { centeredFlex } from '../styles/Styles';
import { useShopStore } from '../hooks/useShopStore';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export const DetailsCart = () => {
    const { SetRemoveFromCart } = useShopStore();
    const navigate = useNavigate()
    const { cart } = useSelector((state) => state.shop);
    const [storedProduct, setStoredProduct] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Obtener y establecer los productos desde localStorage al montar el componente
        const productsFromStorage = JSON.parse(localStorage.getItem('productsCart')) || [];
        setStoredProduct(productsFromStorage);
        setCartItems(productsFromStorage); // Inicializar cartItems con los productos almacenados
    }, []);

    console.log(storedProduct);

    const handleQuantityChange = (id, color, size, newQuantity = 1) => {
        const updatedProducts = storedProduct.map(item =>
            item.id === id && item.selectedColor === color && item.selectedSize == size ? { ...item, quantity: parseInt(newQuantity, 10) || 0 } : item 
        );
        setStoredProduct(updatedProducts); // Actualizar los productos en el estado
        setCartItems(updatedProducts); 
        console.log(updatedProducts);
        localStorage.setItem('productsCart', JSON.stringify(updatedProducts));
        const ad = cartItems.filter(product => product.id === id);
        console.log(ad);
    };

    const removeFromCart = (id, size, color) => {
        const storedProducts = JSON.parse(localStorage.getItem('productsCart')) || [];
        const updatedProducts = storedProducts.filter(product => product.id !== id 
            || product.selectedSize !== size 
            || product.selectedColor !== color);
            console.log(updatedProducts);
        localStorage.setItem('productsCart', JSON.stringify(updatedProducts));
        setStoredProduct(updatedProducts); 
        SetRemoveFromCart(updatedProducts) 
    };


    const handleShop = () => {
        navigate('/cart/addres')
    }
    

    return (
        <>
        <Grid container spacing={4} sx={{ padding: 4, pt: 15, background: '#fcfeff' }}>
            <Grid item xs={12} md={8}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Carrito
                </Typography>
                <TableContainer elevation={0} component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell color='#cccccc'>Producto</TableCell>
                                <TableCell color='#cccccc' align="center">Cantidad</TableCell>
                                <TableCell align="right">Precio</TableCell>
                                <TableCell align="right">Total</TableCell>
                                <TableCell align="center">Accion</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {storedProduct.map((item) => (
                                <TableRow key={item.id + item.selectedColor + item.selectedSize} sx={{
                                    '&:hover': {
                                        background: '#f8fcff',
                                    },
                                }}>
                                    <TableCell component="th" scope="row" >
                                        <Grid container spacing={2} >
                                            <Grid item xs={3}
                                                sx={{
                                                    pr: 15,
                                                }}
                                            >
                                                <Card
                                                    elevation={0}
                                                    sx={{
                                                        ...centeredFlex,
                                                        height: '100%',
                                                        width: 100,
                                                        flexDirection: 'column',
                                                        border: '0.5px solid #cccccc',
                                                        borderRadius: 2.5,
                                                        backgroundColor: '#f8fcff',
                                                        textAlign: { xs: 'center', md: 'left' },
                                                    }}
                                                >
                                                    <CardMedia
                                                        component="img"
                                                        image={item.image}
                                                        alt={item.name}
                                                        sx={{
                                                            height: '80%',
                                                            width: '80%',
                                                            objectFit: 'contain',
                                                        }}
                                                    />
                                                </Card>
                                            </Grid>
                                            <Grid item xs={5} sx={{
                                                flexDirection: 'column',
                                                ...centeredFlex
                                            }}>
                                                <Typography variant="p" color="black">{item.name}</Typography>
                                                
                                                <Typography variant="body2" color="textSecondary">
                                                    Color: {item.selectedColor}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    Talla: {item.selectedSize}
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                    </TableCell>
                                    <TableCell align="center">
                                        <TextField
                                            select
                                            value={item.quantity }
                                            onChange={(e) => handleQuantityChange(item.id, item.selectedColor, item.selectedSize, e.target.value || 1)}
                                            sx={{
                                                width: '60px',
                                                fontSize: '0.5rem',
                                                background: '#f0f0f0',
                                                borderWidth: '1px',
                                                borderRadius: 2,
                                                '&:hover': {
                                                    borderColor: '#cccccc',
                                                },
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#cccccc',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#cccccc', // Color del borde en estado focused
                                                },
                                            }}
                                            InputProps={{
                                                sx: {
                                                    height: '30px',
                                                },
                                            }}
                                        >
                                            {[1, 2, 3, 4, 5].map((option) => (
                                                <MenuItem key={option} value={option || 1} sx={{ fontSize: '0.8rem' }}>
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </TableCell>
                                    <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                                    <TableCell align="right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                                    <TableCell align="center">
                                        <IconButton aria-label="delete" onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card elevation={0} sx={{ padding: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        Sobre su compra 
                    </Typography>
                   
                    <Typography variant="body2" sx={{ pb: 2 }}>
                         Subtotal <span style={{ float: 'right' }}>${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
                        </Typography>
                    <Divider sx={{ my: 2 }} />
                    {storedProduct.map((product) => (
                        <Typography key={product.id + product.selectedColor + product.selectedSize} variant="body2" sx={{ pb: 2 }}>
                        {product.name} - 
                        {product.selectedSize} - 
                        {product.selectedColor} x 
                        {product.quantity} <span style={{ float: 'right' }}>$ {product.price}</span>
                    </Typography>
                    ))}

                    <Divider sx={{ my: 2 }} />
                    <Typography variant="h6">
                        Total <span style={{ float: 'right' }}>${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Button variant="contained" 
                        color="primary"
                        onClick={handleShop} 
                        fullWidth 
                        startIcon={<ShoppingCartIcon/>}
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
                    }}>
                        Comprar
                    </Button>
                </Card>
            </Grid>
        </Grid>
            <Footer />
        </>
    );
};

