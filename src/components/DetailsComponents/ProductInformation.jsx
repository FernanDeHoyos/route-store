import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export const ProductInformation = ({ product }) => {
  return (
    <Box sx={{
        pr: {xs: 0, sm: 5, lg: 5 },
        pt: 1
    }}>
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
            Informacion de producto
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography sx={{
                fontFamily: 'Helvetica, Arial, Beiruti', 
                fontWeight: 'bold',
                fontSize: '0.75rem'
              }}><strong>Precio normal:</strong> {product.price}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{
                fontFamily: 'Helvetica, Arial, Beiruti', 
                fontWeight: 'bold',
                fontSize: '0.75rem'
              }}><strong>precio con descuento:</strong> {product.salePrice}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{
                fontFamily: 'Helvetica, Arial, Beiruti', 
                fontWeight: 'bold',
                fontSize: '0.75rem'
              }}><strong>Description:</strong> {product.description}</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

