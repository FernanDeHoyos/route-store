import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export const PurchasesReturns = () => {
  return (
    <Box sx={{ 
      pr: {xs: 0, sm: 5, lg: 5 }, 
      pt: 1}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ 
            fontFamily: 'Helvetica, Arial, Beiruti', 
            fontWeight: 'bold',
            fontSize: '0.75rem' }}>
            Shipping & Returns
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography sx={{ 
                fontFamily: 'Arial, Beiruti', 
                fontWeight: 'bold',
                fontSize: '0.75rem' }}>
                Fast delivery:
              </Typography>
              <Typography sx={{ 
                fontFamily: 'Arial, Beiruti',
                fontSize: '0.75rem', 
                fontWeight: '300', }}>
                Your package will arrive in 3-5 business days at your pick-up location or in the comfort of your home.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ 
                fontFamily: 'Arial, Beiruti', 
                fontWeight: 'bold',
                fontSize: '0.75rem' }}>
                Simple exchanges:
              </Typography>
              <Typography sx={{ 
                fontFamily: 'Arial, Beiruti',
                fontSize: '0.75rem', 
                fontWeight: '300', }}>
                Is the fit not quite right? No worries - we'll exchange your product for a new one.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ 
                fontFamily: 'Arial, Beiruti', 
                fontWeight: 'bold',
                fontSize: '0.75rem', 
                }}>
                Easy returns:
              </Typography>
              <Typography sx={{ 
                fontFamily: 'Arial, Beiruti', 
                fontSize: '0.75rem', 
                fontWeight: '300', }}>
                Just return your product and we'll refund your money. No questions asked – we'll do our best to make sure your return is hassle-free.
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

