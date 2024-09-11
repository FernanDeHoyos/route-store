import { Box, Button, Card, CardActionArea, CardMedia, Divider, Grid, IconButton, Popover, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { centeredFlex } from '../styles/Styles';


export const PopoverCart = ({ open, anchorEl, handlePopoverClose }) => {
    const navigate = useNavigate()
    const productsFromStorage = JSON.parse(localStorage.getItem('productsCart')) || [];

    const handleToCart = () => {
        navigate('/cart')
        handlePopoverClose()
    }

    const handleToProductCart = (product, type, id, color, size) => {
        console.log(product);
        localStorage.setItem('activeProduct', JSON.stringify(product));
        navigate(`/cart/product/${type}/${id + color + size}`)
        handlePopoverClose()
    }

    return (
        <>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                disableRestoreFocus

                sx={{
                    overflowY: 'auto',
                    scrollbarWidth: 'none', // Firefox - Ocultar barra de scroll
                '&::-webkit-scrollbar': { display: 'none' }, }}

            >
                <Grid item sx={{ ...centeredFlex, flexDirection: 'column', mt: 1, }}>
                    <Typography sx={{
                        fontFamily: 'Helvetica, Arial, Beiruti',
                        fontWeight: 800,
                        fontSize: '0.75rem',
                        color: 'black',
                    }}>
                        Productos en carrito
                    </Typography>
                    <Divider sx={{ width: '96%', mt: 1, mb: 1 }} />
                </Grid>
                
                <IconButton
                    onClick={handlePopoverClose}
                    size='small'
                    sx={{
                        position: 'absolute',
                        top: -1 ,
                        right: 8,
                        zIndex: 10,
                        color: 'black',
                    }}
                >
                    <CloseIcon />
                </IconButton>
                {productsFromStorage.map((product) => (
                    <Grid container
                        key={product.id + product.name + product.selectedColor + product.selectedSize}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            overflowY: 'auto',
                            scrollbarWidth: 'none', // Firefox - Ocultar barra de scroll
                            '&::-webkit-scrollbar': { display: 'none' }, 
                        }} >
                        <Grid item sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: {xs: 250, sm: 400},
                            overflowY: 'auto',
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': {
                                display: 'none',
                            },
                        }}
                        >
                            <Grid item sx={{
                                display: 'flex', flexDirection: 'row', alignItems: 'center', scrollbarWidth: 'none',
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                            }}>

                                <Card
                                    sx={{
                                        maxWidth: { xs: '100%', sm: '100%' },
                                        width: {xs: '3rem', sm: '5rem'},
                                        height: {xs: '3rem', sm: '5rem'},
                                        m: 1,
                                        backgroundColor: 'rgba(240, 240, 240, 0.9)',
                                        borderRadius: 2,
                                        '&:hover': {
                                            boxShadow: 1,
                                            transform: 'scale(1.001)',
                                            transition: 'transform 0.3s ease-in-out',
                                        },
                                    }}
                                >
                                    <CardActionArea onClick={handlePopoverClose} sx={{ height: '100%', ...centeredFlex,
                                        alignItems: 'center', }}>
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                pt: 1,
                                                pb: 1,
                                                height: '90%',
                                                objectFit: 'contain',
                                                backgroundColor: 'transparent',
                                                cursor: 'pointer',
                                                borderRadius: '8px 8px 0 0',
                                            }}
                                            image={product.image}
                                            alt={product.name}
                                        />

                                    </CardActionArea>
                                </Card>

                                <Box sx={{ mt: 0, float: 'right' }}>
                                    <Typography variant="body1" color="black" sx={{ float: 'right', fontFamily: 'Arial, sans-serif', fontSize: '0.8rem', fontWeight: 'bold', mt: 1 }}>
                                        <span style={{ float: 'right' }}>{product.name}</span>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Arial, sans-serif', fontSize: '0.6rem', fontWeight: '300', mb: 0 }}>
                                        {product.selectedColor}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Arial, sans-serif', fontSize: '0.6rem', fontWeight: '300', mb: 0 }}>
                                        {product.selectedSize}
                                    </Typography>
                                    <Typography variant="body1" color="primary" sx={{ fontFamily: 'Arial, sans-serif', fontSize: '0.8rem', fontWeight: 'bold', mt: 0.5 }}>
                                        Precio ${product.price}
                                    </Typography>
                                </Box>
                            </Grid>


                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained"
                                    color="primary"
                                    onClick={() => handleToProductCart(product, product.type, product.id, product.selectedColor, product.selectedSize)}
                                    /* startIcon={<ShoppingCartIcon/>} */
                                    sx={{
                                        marginRight: 1,
                                        width: '30%',
                                        height: 30,
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
                                    ver
                                </Button>
                            </Box>
                        </Grid>
                        <Divider sx={{ width: '96%', mb: 1 }} />
                    </Grid>
                ))}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained"
                        color="primary"
                        onClick={handleToCart}
                        startIcon={<ShoppingCartIcon />}
                        sx={{
                            width: '96%',
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
                        Ir a carrito
                    </Button>
                </Box>
            </Popover>
        </>
    )
}
