import { Divider, Grid } from '@mui/material'
import './App.css'
import { ContentProducts } from './components/ContentProducts'
import { Landing } from './components/Landing'
import Footer from './components/Footer'
import { SearchProduct } from './modales/SearchProduct'

export const App = () => {

  return (
    <Grid container>
   <Grid item xs={12} >
    <Landing/>
   </Grid> 
   <Grid item xs={12} sx={{padding:3}}>
    <ContentProducts/>
   </Grid>
   <Grid item xs={12} >
   <Divider/>
    <Footer/>
   </Grid>
    </Grid>
  )
}

