import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button, Card, Divider, IconButton, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CardMedia, TextField, Box } from '@mui/material';
import { centeredFlex } from '../styles/Styles';
import Footer from '../components/Footer';
import { useForm } from '../hooks/useForm';
import { useShopStore } from '../hooks/useShopStore';
import { AlertDialog } from '../modales/AlertDialog';
import { AlertG } from '../modales/AlertG';
import { ProgresCircular } from '../components/DetailsComponents/ProgresCircular';


// Tu código existente

export const DatesShoping = () => {

    const { onSaveShopping } = useShopStore();
    const { formState, onInputChange } = useForm({
        Nombre: '',
        Apellido: '',
        Celular: '',
        Direccion: '',
        Ciudad: '',
        Especificaciones_envio: ''
    });

    const [storedProduct, setStoredProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [errors, setErrors] = useState({});
    const [openDialog, setOpenDialog] = useState(false);
    const [openDia, setOpenDia] = useState(false);
    const [checking, setChecking] = useState(false);
    const [message, setMessage] = useState('');


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

    // funcion verificar campos no vacios del formulario
    const validateForm = () => {
        const newErrors = {};
        Object.keys(formState).forEach(key => {
            if (!formState[key]) {
                newErrors[key] = 'Este campo es obligatorio';
            }
        });
        setErrors(newErrors);
        if (!(Object.keys(newErrors).length === 0)) {
            setMessage('Debe llenar todos los campos.')
        }
        return Object.keys(newErrors).length === 0;
    };

    //verificar productos en carrito y formulario completo
    const handleOpenDialog = () => {
        if (!validateForm() || storedProduct.length <= 0) {
            setOpenDia(true)
            return
        }
        setOpenDialog(true);

    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const sendWhatsAppMessage = (array) => {
        const { Nombre, Apellido, Celular, Direccion, Ciudad, Especificaciones_envio } = array[0];
        const products = array[1].map(product =>
            `ID: ${product.id}\n` +
            `Nombre: ${product.name}\n` +
            `Color: ${product.selectedColor}\n` +
            `Talla: ${product.selectedSize}\n` +
            `Cantidad: ${product.quantity}\n` +
            `Precio: $${product.price}\n` +
            `Imagen: ${window.location.origin}${product.image}\n`
        ).join('\n');

        const totalPrice = array[1].reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2);

        const message = `SOMOS ROUTE 66 STORE\n\nsobre su compra:\n\nInformación del Cliente:\nNombre: ${Nombre} ${Apellido}\nTeléfono: ${Celular}\nDirección: ${Direccion}, ${Ciudad}\nEspecificaciones: ${Especificaciones_envio}\n\nProductos:\n${products}\n\nPrecio Total: $${totalPrice}`;
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = '3136601690'; // Reemplazar con el número de teléfono del destinatario
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };



    const handleConfirmPurchase = async () => {
        const array = [formState, storedProduct];
        handleCloseDialog();
        sendWhatsAppMessage(array)
        setChecking(true)
        await onSaveShopping(array);
        setChecking(false)
    };

    const handleCloseDia = () => {
        setOpenDia(false);
    };

    if (checking) {
        return (
            <ProgresCircular />
        )
    }

    return (
        <>
            <Grid container spacing={4} sx={{ padding: 4, pt: 15, background: '#f8fcff' }}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Datos para hacer el envio
                    </Typography>
                    <Grid item xs={12} md={12}
                        sx={{
                            ...centeredFlex,
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                        }}>
                        {Object.keys(formState).map((key) => {
                            let type = 'text';
                            if (key === 'phone' || key === 'postalCode') {
                                type = 'number';
                            } else {
                                type = 'text';
                            }
                            return (
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
                                        padding: 0,
                                        width: { xs: '40%', md: '45%' },
                                        m: 1,
                                        border: '1px solid #fff',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra para destacar el campo de texto
                                        '&:hover': {

                                        }

                                    }}
                                />
                            );
                        })}

                        
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card elevation={0} sx={{ padding: 2 }}>
                        <Typography variant="h5" gutterBottom>
                            Sobre su compra
                        </Typography>

                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body2" sx={{ pb: 2, fontWeight: 'bold' }}>
                            Subtotal <span style={{ float: 'right' }}>${totalPrice}</span>
                        </Typography>
                        {storedProduct.map((produc) => (
                            <Typography variant="body2" key={produc.id + produc.selectedColor + produc.selectedSize} sx={{ fontWeight: 'bold' }}>
                                {produc.name} x {produc.quantity} talla {produc.selectedSize} <span style={{ float: 'right' }}>${produc.price * produc.quantity}</span>
                            </Typography>
                        ))}

                        <Divider sx={{ my: 2 }} />
                        <Typography variant="h6">
                            Total <span style={{ float: 'right' }}>$ {totalPrice}</span>
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
                    <Grid sx={{ width: '100%' }}>
                        <TableContainer elevation={0} component={Paper} sx={{ width: '100%', maxWidth: '100%' }}>
                            <Table sx={{ width: '100%' }}>
                                <TableBody>
                                    {storedProduct.map((item) => (
                                        <TableRow key={item.id + item.selectedColor + item.selectedSize} sx={{
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
                                                                    height: '100%',
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
                                            <TableCell align="right">{item.quantity} x ${item.price}</TableCell>
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
                phone={formState.Celular}
                address={formState.Direccion}
                specifications={formState.Especificaciones_envio}
            />

            <AlertG
                open={openDia}
                handleClose={handleCloseDia}
                title={'Compra no en orden'}
                body={message}
            />
        </>
    );
};
