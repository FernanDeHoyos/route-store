import { useNavigate } from 'react-router-dom';
import { Button, Card, CardMedia, Grid, IconButton, MenuItem, Modal, Paper, Popover, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { centeredFlex } from '../styles/Styles';


export const ModalCart = ({anchorEl, handleClose, handleOpen, product}) => {

    const navigate = useNavigate()
    const handleToCart = () => {
        navigate('/cart')
    }

    const open = Boolean(anchorEl)

  return (
    <div>
 
        <Popover
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
        }}

        
        sx={{pointerEvents: 'auto'}}
        >
         <Grid  sx={{width: '100%'}}>
          <TableContainer elevation={0} component={Paper} sx={{width: '100%',
        maxWidth: '100%'}}>
                    <Table sx={{width: '100%'}}>
                        <TableHead>
                            <TableRow>
                                <TableCell color='#cccccc'></TableCell>
                                <TableCell align="right">Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                           
                                <TableRow sx={{
                                    '&:hover': {
                                        background: '#f8fcff',
                                    },
                                }}>
                                    <TableCell component="th" scope="row" >
                                        <Grid container spacing={1} >
                                            <Grid item xs={7}
                                                sx={{
                                                    
                                                }}
                                            >
                                                <Card
                                                    elevation={0}
                                                    sx={{
                                                        ...centeredFlex,
                                                        height: '100%',
                                                        width: {xs: 50, md: 100},
                                                        flexDirection: 'column',
                                                        border: '0.5px solid #cccccc',
                                                        borderRadius: 2.5,
                                                        backgroundColor: '#f8fcff',
                                                        textAlign: { xs: 'center', md: 'left' },
                                                    }}
                                                >
                                                    <CardMedia
                                                        component="img"
                                                        image={product.image}
                                                        alt={'item.name'}
                                                        sx={{
                                                            height: '80%',
                                                            width: '80%',
                                                            objectFit: 'contain',
                                                        }}
                                                    />
                                                </Card>
                                            </Grid>
                                            <Grid item xs={5}  sx={{
                                                flexDirection: 'column',
                                                ...centeredFlex
                                            }}>
                                                <Typography variant="body2" color="textSecondary">
                                                    Variant: {product.name}
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                    </TableCell>
                                   
                                    <TableCell align="right">${product.price}</TableCell>
                                </TableRow>
                            
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid item sx={{
                    ...centeredFlex
                }}>
                <Button variant="contained" 
                        color="primary"
                        onClick={handleToCart} 
                        startIcon={<ShoppingCartIcon/>}
                        sx={{
                            marginBottom: 1,
                            marginTop:1,
                            width: '90%',
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
                        Ir al carrito
                    </Button>
                </Grid>
                </Grid>
        </Popover>
    </div>
  )
}
