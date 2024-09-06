import {Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';


export const AlertG = ({ open, handleClose,  /* phone, address, specifications */ body, title }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle sx={{ bgcolor: '#dbeeff' }} id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent sx={{ background: '#dbeeff' }}>
      <Typography id="alert-dialog-description">
         {body}
      </Typography>
      </DialogContent>
      <DialogActions
        sx={{
          display: 'flex',
          flexDirection: 'column',
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
          Cancelar
        </Button>

        
      </DialogActions>
    </Dialog>
  );
};
