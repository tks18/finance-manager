import { Typography, Unstable_Grid2 as Grid } from '@mui/material';

import { BuildDBApiInputForm } from '@/components';
import { useAuthDataHomeOutletContext } from '../hooks';

export function AuthDataHomeAdd() {
  const { userToken, config } = useAuthDataHomeOutletContext();

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

      <Grid xs={12} container sx={{ display: 'flex' }}>
        <BuildDBApiInputForm userToken={userToken} config={config} />
      </Grid>
    </Grid>
  );
}
