import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { SearchProduct } from '../modales/SearchProduct';

export const AppbarComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

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

  const menuItems = [
    { text: 'Todos los productos', icon: <AllInboxIcon /> },
    { text: 'Buscar', icon: <SearchIcon /> },
    { text: 'Carrito', icon: <ShoppingCartIcon /> },
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
          <ListItem button key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="absolute" color="inherit">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item xs>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Box
                    component="img"
                    src="/logo.jpg"
                    alt="Logo"
                    sx={{ height: { xs: 30, md: 40 }, mr: 2 }}
                  />
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#"
                    sx={{
                      fontSize: { xs: 10, md: 25 },
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: { xs: '.1rem', md: '.3rem' },
                      color: 'GrayText',
                      textDecoration: 'none',
                    }}
                  >
                    ROUTE 66 STORE
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton size="small" aria-label="search" color="inherit" sx={{ ml: 0.5 }} onClick={handleSearchOpen}>
                    <SearchIcon />
                  </IconButton>
                  <IconButton size="small" aria-label="show 4 new mails" color="inherit" sx={{ ml: 0.5 }}>
                    <Badge badgeContent={4} color="error">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
      <Modal
        open={searchOpen}
        onClose={handleSearchClose}
        aria-labelledby="search-modal-title"
        aria-describedby="search-modal-description"
        sx={{
            bgcolor: 'rgba(255, 255, 255, 1)', // Fondo semi-transparente
            backdropFilter: 'blur(10px)', // Efecto de difuminado
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
            height: {sx: '90%', sm: 580 },
            maxWidth: 700,
            maxHeight: '100vh',
            overflow: 'auto',
            background: 'transparent',
            boxShadow: 24,
            p: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
         <SearchProduct/>
        </Box>
      </Modal>
    </>
  );
};

