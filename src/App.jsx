import { Divider, Grid, Typography } from '@mui/material';
import { ContentProducts } from './components/ContentProducts';
import { Landing } from './components/Landing';
import Footer from './components/Footer';
import { Categorys } from './components/Categorys';
import { centeredFlex } from './styles/Styles';
import './App.css';


export const App = () => {
  return (
    <Grid container sx={{ background: '#fcfeff', overflowX: 'hidden' }}>
      <Landing />
       <Grid item xs={12} sx={{ padding: 3, ...centeredFlex, flexDirection: 'column'}}>
        <Categorys/>
        <Typography
          variant="h4"
          color="black"
          sx={{
            mt: 2,
            mb: 2,
            fontFamily: 'Arial, sans-serif',
            fontWeight: '200',
          }}
        >
          NUEVA COLECCION
        </Typography>
        <ContentProducts />
      </Grid>
      <Grid item xs={12}>
        <Divider />
        <Footer />
      </Grid>
    </Grid>
  );
};
