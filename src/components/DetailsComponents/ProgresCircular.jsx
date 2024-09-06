import { CircularProgress, Grid } from "@mui/material"

export const ProgresCircular = () => {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '100vh', backgroundColor: '#f8fcff', padding: 4 }}>


    <Grid container
    direction='row'
    justifyContent='center'
         >
            <CircularProgress sx={{color: '#000'}} />
    </Grid>
</Grid>
  )
}