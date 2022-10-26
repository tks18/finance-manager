import { useEffect } from 'react';
import { Box, Unstable_Grid2 as Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '@plugins/store';
import { userSelectors } from '@plugins/store';

import { Login, Register } from './sub-routes';

export function Auth() {
  const navigate = useNavigate();
  const userToken = useAppSelector(userSelectors.userToken);
  const isAuthenticated = useAppSelector(userSelectors.isAuthenticated);
  const isVerified = useAppSelector(userSelectors.isVerified);

  useEffect(() => {
    if (isAuthenticated && isVerified && userToken) {
      navigate('/');
    }
  });

  return (
    <Box>
      <Grid container rowSpacing={1}>
        <Grid xs={12} md={6} container sx={{ display: 'flex' }}>
          <Login />
        </Grid>
        <Grid xs={12} md={6} sx={{ display: 'flex' }}>
          <Register />
        </Grid>
      </Grid>
    </Box>
  );
}
