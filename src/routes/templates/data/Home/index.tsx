import { Typography, Unstable_Grid2 as Grid } from '@mui/material';

import { RenderModelInputFields } from '@components/Fields-Renderer';
import { useDataOutletContext } from '../hooks';

export function DataHome() {
  const { userToken, config } = useDataOutletContext();

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
        <RenderModelInputFields userToken={userToken} config={config} />
      </Grid>
    </Grid>
  );
}
