import { Box, Grid, Typography } from '@mui/material'

export const WhatsappMessage = () => {
    return (
        <Grid item>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={2}
                sx={{ backgroundColor: '#dbeeff', borderRadius: '8px', textAlign: 'center' }}
            >
                <Box
                    component="img"
                    src="/icoW.png"
                    alt="WhatsApp Logo"
                    sx={{ width: '50px', height: '50px', marginBottom: '10px' }}
                />
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                    Será redirigido a WhatsApp
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                    Con sus datos para efectuar el pago y coordinar el envío de su compra, por favor, continúe.
                </Typography>
            </Box>
        </Grid>
    )
}
