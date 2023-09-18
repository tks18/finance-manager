import { useEffect, useState } from 'react';
import { Box, Unstable_Grid2 as Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppSelector } from '@plugins/store';
import { userSelectors } from '@plugins/store';

import { Login, Register } from '@components';
import { userMethods } from '@plugins/backend/api';

// Types
import type { IUserAllowRegistrationResponse } from '@plugins/backend/types';

export function Access() {
  const navigate = useNavigate();
  const userToken = useAppSelector(userSelectors.userToken);
  const isAuthenticated = useAppSelector(userSelectors.isAuthenticated);
  const isVerified = useAppSelector(userSelectors.isVerified);

  useEffect(() => {
    if (isAuthenticated && isVerified && userToken) {
      navigate('/');
    }
  });

  const [registrationState, setRegistrationState] =
    useState<IUserAllowRegistrationResponse>({
      login: true,
      register: true,
    });

  useEffect(() => {
    userMethods
      .checkRegistration()
      .then((registrationResponse) => {
        if (registrationResponse.status === 200) {
          setRegistrationState(registrationResponse.data);
        } else {
          toast.error('Api Failed to Fetch');
        }
      })
      .catch((e) => {
        toast.error(String(e));
      });
  });

  const allowLogin = registrationState.login && !registrationState.register;
  const noDisplay = registrationState.login && registrationState.register;

  return noDisplay ? (
    <></>
  ) : (
    <Box>
      <Grid
        container
        rowSpacing={1}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        {allowLogin ? (
          <Grid xs={12} md={6} container sx={{ display: 'flex' }}>
            <Login />
          </Grid>
        ) : (
          <Grid xs={12} md={6} sx={{ display: 'flex' }}>
            <Register />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
