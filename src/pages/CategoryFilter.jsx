import { Divider, Grid, Typography } from '@mui/material'
import { ContentProducts } from '../components/ContentProducts'
import { centeredFlex } from '../styles/Styles'
import Footer from '../components/Footer'
import { SecondaryNavbar } from '../components/SecundaryNavbar'


export const CategoryFilter = () => {

    const activeCategory = localStorage.getItem('activeCategory')

  return (
    <>
    <Grid container sx={{paddingTop: '110px', pb:5, display: 'flex', ...centeredFlex, flexDirection: 'column'}}>
        <SecondaryNavbar>
        <Typography
          variant="h4"
          color="black"
          sx={{
            mt: 2,
            mb: 2,
            fontFamily: 'Arial, sans-serif',
            fontWeight: '200',
            textTransform: 'uppercase',
          }}
        >
          {activeCategory}
        </Typography>
            <ContentProducts/>
        </SecondaryNavbar>
    </Grid>
    <Footer/>
    </>
  )
}
