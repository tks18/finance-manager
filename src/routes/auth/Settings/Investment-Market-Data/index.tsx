import { Typography, Unstable_Grid2 as Grid, Button } from '@mui/material';
import { api } from '@plugins/backend';
import { toast } from 'react-toastify';

import { useAuthOutletContext } from '@routes/Auth/hooks';

export function AuthSettingsInvestmentMasterData() {
  const { userToken } = useAuthOutletContext();

  const updateMarketData = async () => {
    try {
      const response = await api.data.transactions.marketData.updateMarketData(
        userToken,
      );
      toast.success(response.data);
    } catch (e) {
      toast.error(String(e));
    }
  };

  return (
    <Grid container rowSpacing={1}>
      <Grid
        rowSpacing={1}
        xs={12}
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{ fontWeight: 'bold' }} variant="h5">
          Update Investment Market Data in DB
        </Typography>
      </Grid>
      <Grid
        rowSpacing={1}
        xs={12}
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
        container
      >
        <Grid
          sm={4}
          xs={12}
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <Button variant="contained" onClick={updateMarketData}>
            Click to Update
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
