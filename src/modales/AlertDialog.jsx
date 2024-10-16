import {Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';
import { WhatsappMessage } from '../components/DetailsComponents/WhatsappMessage';


export const AlertDialog = ({ open, handleClose, handleConfirm, phone, address, specifications }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle sx={{ bgcolor: '#dbeeff' }} id="alert-dialog-title">
        {"Confirme su compra"}
      </DialogTitle>
      <DialogContent sx={{ background: '#dbeeff' }}>
        <Typography id="alert-dialog-description">
          Por favor si esta seguro de estos datos precione en confirmar, recuerde que su compra se enviara a la direccion sugerida:
        </Typography>
        <Typography variant="body2" sx={{ pb: 2, mt: 3, fontWeight: 'bold' }}>
          Celular: <span style={{ float: 'right' }}>{phone}</span>
        </Typography>
        <Typography variant="body2" sx={{ pb: 2, fontWeight: 'bold' }}>
          Dirección: <span style={{ float: 'right' }}>{address}</span>
        </Typography>
        <Typography variant="body2" sx={{ pb: 2, fontWeight: 'bold' }}>
          Especificaciones: <span style={{ float: 'right' }}>{specifications}</span>
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          bgcolor: '#dbeeff'
        }}
      >
        <Button
          onClick={handleClose}
          fullWidth
          sx={{
            marginBottom: 1,
            background: '#3C1C0C',
            fontSize: '0.75rem',
            fontWeight: '300',
            color: 'white',
            borderColor: '#cccccc',
            '&:hover': {
              borderColor: '#cccccc',
              background: '#3C1C0C',
            },
          }}
        >
          Cancelar
        </Button>

        <Button
          onClick={handleConfirm}
          autoFocus
          fullWidth
          sx={{
            mr: 1,
            marginBottom: 1,
            background: '#000',
            fontSize: '0.75rem',
            fontWeight: '300',
            color: 'white',
            borderColor: '#cccccc',
            '&:hover': {
              borderColor: '#cccccc',
              background: '#3C1C0C',
            },
          }}
        >
          Confirmar
        </Button>
      </DialogActions>
      <WhatsappMessage/>
    </Dialog>
  );
};
