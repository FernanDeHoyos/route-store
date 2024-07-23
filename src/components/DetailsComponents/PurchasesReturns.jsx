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
            Compras y devoluciones
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography sx={{ 
                fontFamily: 'Arial, Beiruti', 
                fontWeight: 'bold',
                fontSize: '0.75rem' }}>
                Entrega rápida:
              </Typography>
              <Typography sx={{ 
                fontFamily: 'Arial, Beiruti',
                fontSize: '0.75rem', 
                fontWeight: '300', }}>
Tu paquete llegará en 3-5 días hábiles a tu punto de recogida o en la comodidad de tu hogar.              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ 
                fontFamily: 'Arial, Beiruti', 
                fontWeight: 'bold',
                fontSize: '0.75rem' }}>
                Intercambios sencillos:
              </Typography>
              <Typography sx={{ 
                fontFamily: 'Arial, Beiruti',
                fontSize: '0.75rem', 
                fontWeight: '300', }}>
¿El ajuste no es el adecuado? No te preocupes, cambiaremos tu producto por uno nuevo.              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ 
                fontFamily: 'Arial, Beiruti', 
                fontWeight: 'bold',
                fontSize: '0.75rem', 
                }}>
                Devoluciones fáciles
              </Typography>
              <Typography sx={{ 
                fontFamily: 'Arial, Beiruti', 
                fontSize: '0.75rem', 
                fontWeight: '300', }}>
Simplemente devuelve tu producto y te reembolsaremos tu dinero. Sin preguntas - haremos nuestro mejor esfuerzo para que tu devolución sea libre de complicaciones.              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

