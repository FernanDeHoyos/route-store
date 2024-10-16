import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar, Box, Toolbar, Badge, IconButton, Typography, Container, Drawer,
  List, ListItem, ListItemIcon, ListItemText, Grid, Modal, Button, useMediaQuery, Divider, Popover
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';


import { SearchProduct } from '../modales/SearchProduct';
import { PopoverCart } from '../modales/PopoverCart';

export const AppbarComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md')); // Detect small screens
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [numCart, setNumCart] = useState(0);
  
  const { cart } = useSelector((state) => state.shop);

  //abrir vista de carrito con hover
  const handlePopoverOpen = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget); // Establece el elemento de anclaje para el Popover
  };

  //cerrar vista de carrito
  const handlePopoverClose = () => {
    setAnchorEl(null) 
  };
  
  const [anchorEl, setAnchorEl] = useState(null);
  //variable para detectar el cambio de anchorEl para abrir o cerrar vista de carrito
  const open = Boolean(anchorEl);

  const handleBackClick = () => {
    navigate(-1); // Navega a la página anterior
  };

  const updateCartCount = () => {
    const storedProducts = JSON.parse(localStorage.getItem('productsCart')) || [];
    setNumCart(storedProducts.length);
  };

  useEffect(() => {
    updateCartCount();
  }, [cart]);
  
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };
  
  const handleSearchOpen = () => {
    setSearchOpen(true);
  };
  
  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMenuItemClick = (text) => {
    switch (text) {
      case 'Buscar':
        handleSearchOpen();
        break;
      case 'Carrito':
        navigate('/cart');
        break;
      case 'Inicio':
        navigate('/');
        break;
      default:
        break;
    }
    setDrawerOpen(false); // Cierra el drawer después de hacer clic en un elemento
  };

  const menuItems = [
    { text: 'Inicio', icon: <AllInboxIcon />, link: '/' },
    { text: 'Buscar', icon: <SearchIcon />, action: handleSearchOpen },
  ];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} onClick={() => handleMenuItemClick(item.text)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" color="inherit" elevation={0} sx={{ boxShadow: 'none',  }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid container sx={{ }}>
              {/* Left Section: Menu, Back button */}
              <Grid item xs={3} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {isSmallScreen ? (
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2, fontSize: '0.75rem',
                      fontWeight: '300', }}
                      onClick={toggleDrawer(true)}
                    >
                      <MenuIcon />
                    </IconButton>
                  ) : (
                    location.pathname !== '/' && (
                      <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="go back"
                        sx={{ mr: 2 }}
                        onClick={handleBackClick}
                      >
                        <ArrowBackIcon />
                      </IconButton>
                    )
                  )}
                  {/* Menu items for larger screens */}
                  {!isSmallScreen &&
                    menuItems.map((item) => (
                      <Button
                        key={item.text}
                        color="inherit"
                        onClick={item.action || (() => navigate(item.link))}
                        sx={{ mx: 1, fontSize: '0.75rem',
                        fontWeight: 'bold', }}
                      >
                        {item.text}
                      </Button>
                    ))}
                </Box>
              </Grid>

              {/* Center Section: Logo */}
              <Grid item xs={6} md={4} sx={{ textAlign: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Box
                    component="img"
                    src="/logo.ico"
                    alt="Logo"
                    sx={{ height: { xs: 30, md: 40 }, mr: 2 }}
                  />
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#"
                    sx={{
                      fontSize: { xs: 10, md: 15 },
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: { xs: '.1rem', md: '.3rem' },
                      color: 'black',
                      textDecoration: 'none',
                    }}
                  >
                    ROUTE 66 STORE
                  </Typography>
                </Box>
              </Grid>

              {/* Right Section: Cart */}
              <Grid item xs={3} md={4} sx={{ textAlign: 'right' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <IconButton onClick={() => navigate('/cart')} 
                    size="small" 
                    aria-label="show cart items" 
                    color="inherit"
                    sx={{background: '#fff',
                    '&:hover':{

                    }}}
                    onMouseEnter={handlePopoverOpen}
                    //</Box>onMouseLeave={handlePopoverClose}
                     >
                    <Badge badgeContent={numCart} color="error">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
        <Divider/>
      {/* Drawer for small screens */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>

      {/* Modal for search */}
      <Modal
      open={searchOpen}
      onClose={handleSearchClose}
      aria-labelledby="search-modal-title"
      aria-describedby="search-modal-description"
      sx={{
        backdropFilter: 'blur(10px)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: 2,
          width: '100%',
          height: { xs: '90%', sm: 580 },
          maxWidth: 700,
          maxHeight: '100vh',
          overflow: 'auto',
          background: '#FFF',
          boxShadow: 24,
          p: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        {/* Icono para cerrar el modal */}
        <IconButton
          onClick={handleSearchClose}
          sx={{
            position: 'absolute',
            top: {xs: 10, sm: 8},
            right: 8,
            zIndex: 10,
            color: 'black',
          }}
        >
          <CloseIcon />
        </IconButton>

        <SearchProduct onClose={handleSearchClose} />
      </Box>
    </Modal>

    <PopoverCart 
      open={open} 
      anchorEl={anchorEl} 
      handlePopoverClose={handlePopoverClose} />
    </>
  );
};
