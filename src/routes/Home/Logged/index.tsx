import { Typography, Unstable_Grid2 as Grid } from '@mui/material';

export function HomeLogged() {
  return (
    <Grid
      container
      xs={12}
      sx={{
        display: 'flex',
        alignContent: 'center',
        justifyItems: 'center',
      }}
    >
      <Grid xs={12}>
        <Typography
          sx={{
            color: 'primary.main',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
          variant="h4"
        >
          Kindly use the Navigation Pane to navigate to transactions and masters
        </Typography>
      </Grid>
    </Grid>
  );
}
