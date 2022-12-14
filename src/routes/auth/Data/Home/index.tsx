import { Typography, Unstable_Grid2 as Grid } from '@mui/material';

import { BuildDBApiInputForm } from '@/components';
import { useAuthDataOutletContext } from '../hooks';

export function AuthDataHome() {
  const { userToken, config } = useAuthDataOutletContext();

  const { componentOptions } = config;
  const { title } = componentOptions;

  return (
    <Grid container rowSpacing={1}>
      <Grid xs={12}>
        <Typography
          sx={{ fontWeight: 'bold', textAlign: 'center' }}
          variant="h5"
        >
          {title}
        </Typography>
      </Grid>

      <Grid xs={12} container>
        <BuildDBApiInputForm userToken={userToken} config={config} />
      </Grid>
    </Grid>
  );
}
