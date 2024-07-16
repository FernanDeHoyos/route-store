import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button, Card, Divider, IconButton, TextField, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CardMedia } from '@mui/material';
import { centeredFlex } from '../styles/Styles';
import Footer from '../components/Footer';
import { useForm } from '../hooks/useForm';
import { useShopStore } from '../hooks/useShopStore';
import { AlertDialog } from '../modales/AlertDialog';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// Tu código existente

export const DatesShoping = () => {

    const {onSaveShopping} = useShopStore();
    const { formState, onInputChange } = useForm({
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        specificationsAddress: ''
    });

    const [storedProduct, setStoredProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [errors, setErrors] = useState({});
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        const productsFromStorage = JSON.parse(localStorage.getItem('productsCart')) || [];
        setStoredProduct(productsFromStorage);
    }, []);

    useEffect(() => {
        const prices = storedProduct.map((price) => price.price * price.quantity);
        const total = prices.reduce((acc, price) => acc + price, 0);
        setTotalPrice(total);
        console.log(total);
    }, [storedProduct]);

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formState).forEach(key => {
            if (!formState[key]) {
                newErrors[key] = 'Este campo es obligatorio';
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleOpenDialog = () => {
        if(validateForm()) {
            setOpenDialog(true);
        } else {
            console.log('Formulario no válido');
        }
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const sendWhatsAppMessage = (array) => {
        const { firstName, lastName, phone, address, city, postalCode, specificationsAddress } = array[0];
        const products = array[1].map(product => 
            `${product.name} (Color: ${product.selectedColor}, Size: ${product.selectedSize}, Quantity: ${product.quantity})`
        ).join('\n');

        const message = `New Purchase:\n\nCustomer Information:\nName: ${firstName} ${lastName}\nPhone: ${phone}\nAddress: ${address}, ${city}\nPostal Code: ${postalCode}\nSpecifications: ${specificationsAddress}\n\nProducts:\n${products}\n\nTotal Price: $${totalPrice}`;
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = '3136601690'; // Replace with the recipient's phone number
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    };

    const handleConfirmPurchase = async() => {
        const array = [formState, storedProduct];
        console.log(array);
        handleCloseDialog();
        sendWhatsAppMessage(array)
        console.log('cargando...');
        ///await onSaveShopping(array);
        console.log('termino...');
    };

    return (
        <>
            <Grid container spacing={4} sx={{ padding: 4, pt: 15, background: '#f8fcff' }}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Address form
                    </Typography>
                    <Grid item xs={12} md={12} 
                        sx={{
                            ...centeredFlex,
                            flexDirection: 'row',
                            flexWrap: 'wrap'
                        }}>
                        {Object.keys(formState).map((key) => {
                            let type = 'text';
                            if(key === 'phone' || key === 'postalCode') {
                                type = 'number';
                            } else {
                                type = 'text';
                            }
                            return(
                                <TextField
                                    key={key}
                                    fullWidth
                                    type={type}
                                    required
                                    label={key.charAt(0).toUpperCase() + key.slice(1)}
                                    variant="outlined"
                                    name={key}
                                    value={formState[key]}
                                    onChange={onInputChange}
                                    error={!!errors[key]}
                                    helperText={errors[key] || ''}
                                    sx={{
                                        width: { xs: '35%', md: '45%' },
                                        m:1,
                                        bgcolor: '#f8fcff',
                                        borderRadius: 2,
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra para destacar el campo de texto
                                        '&:hover': {
                                            borderColor: 'rgba(0, 0, 0, 0.5)', // Color de borde al hacer hover
                                        },
                                        '&.Mui-focused ': {
                                            borderColor: 'rgba(0, 0, 0, 0.5)', // Color de borde al estar enfocado
                                            bgcolor: '#f8fcff'
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'rgba(0, 0, 0, 0.5)', // Color del label
                                        },
                                    }}
                                />
                            );
                        })}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card elevation={0} sx={{ padding: 2 }}>
                        <Typography variant="h5" gutterBottom>
                            Summary
                        </Typography>
                        <Typography variant="body1">
                            <a href="#">Add gift card or discount code</a>
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body2" sx={{ pb: 2 }}>
                            Subtotal <span style={{ float: 'right' }}>${totalPrice}</span>
                        </Typography>
                        {storedProduct.map((produc) => (
                            <Typography variant="body2" key={produc.id}>
                                {produc.name} x {produc.quantity} <span style={{ float: 'right' }}>${produc.price * produc.quantity}</span>
                            </Typography>
                        ))}
                        <Typography variant="body2">
                            Taxes <span style={{ float: 'right' }}>$0.00</span>
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="h6">
                            Total <span style={{ float: 'right' }}>${totalPrice}</span>
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Button 
                            variant="contained" 
                            color="primary" 
                            fullWidth 
                            onClick={handleOpenDialog}
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
                    <Grid sx={{width: '100%'}}>
                        <TableContainer elevation={0} component={Paper} sx={{width: '100%', maxWidth: '100%'}}>
                            <Table sx={{width: '100%'}}>
                                <TableBody>
                                    {storedProduct.map((item) => (
                                        <TableRow key={item.id} sx={{
                                            '&:hover': {
                                                background: '#f8fcff',
                                            },
                                        }}>
                                            <TableCell component="th" scope="row">
                                                <Grid container spacing={1}>
                                                    <Grid item xs={7}>
                                                        <Card
                                                            elevation={0}
                                                            sx={{
                                                                ...centeredFlex,
                                                                height: '100%',
                                                                width: '50%',
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
                                                                alt={item.image}
                                                                sx={{
                                                                    height: '80%',
                                                                    width: '80%',
                                                                    objectFit: 'contain',
                                                                }}
                                                            />
                                                        </Card>
                                                    </Grid>
                                                    <Grid item xs={1} sx={{
                                                        flexDirection: 'column',
                                                        ...centeredFlex
                                                    }}>
                                                        <Typography variant="body2" color="textSecondary">
                                                            {item.name}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                            <TableCell align="right">{item.quantity} x ${item.price }</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
            <AlertDialog 
                open={openDialog} 
                handleClose={handleCloseDialog} 
                handleConfirm={handleConfirmPurchase}
                phone={formState.phone} 
                address={formState.address}
                specifications={formState.specificationsAddress}
            />
        </>
    );
};
