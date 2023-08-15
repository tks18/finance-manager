import { Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { LinkButton } from '@components';

export function HomeNotLogged() {
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
          Welcome Visitor, Please Login / Register to Continue
        </Typography>
      </Grid>
      <Grid
        xs={12}
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          my: 2,
        }}
      >
        <Grid
          xs={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 1,
          }}
        >
          <LinkButton variant="outlined" to="/access">
            Login
          </LinkButton>
        </Grid>
        <Grid
          xs={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 1,
          }}
        >
          <LinkButton variant="outlined" to="/access">
            Register
          </LinkButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
