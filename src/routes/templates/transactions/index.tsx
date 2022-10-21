import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ReactElement } from 'react';

import { useBackendApi } from '@plugins/backend/hooks';

export function TransactionRoute(): ReactElement {
  const navigate = useNavigate();
  const config = useBackendApi();

  return config !== undefined ? (
    <Typography sx={{ color: 'primary.main', fontWeight: 'bold' }} variant="h1">
      <span onClick={() => navigate('/')}>About</span>
    </Typography>
  ) : (
    <Typography
      sx={{
        color: 'primary.main',
        fontWeight: 'bold',
        textAlign: 'center',
        mt: 5,
      }}
      variant="body2"
    >
      Api Not Found for the Path, Redirecting you to Home.....
    </Typography>
  );
}
