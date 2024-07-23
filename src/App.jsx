import { Divider, Grid } from '@mui/material';
import { ContentProducts } from './components/ContentProducts';
import { Landing } from './components/Landing';
import Footer from './components/Footer';
import './App.css';

export const App = () => {
  return (
    <Grid container sx={{ background: '#fcfeff', overflowX: 'hidden' }}>
      <Landing />
      <Grid item xs={12} sx={{ padding: 3 }}>
        <ContentProducts />
      </Grid>
      <Grid item xs={12}>
        <Divider />
        <Footer />
      </Grid>
    </Grid>
  );
};
