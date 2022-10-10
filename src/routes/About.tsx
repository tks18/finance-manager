import { Typography } from '@mui/material';
import { useNavigate } from '@tanstack/react-location';
import { ReactElement } from 'react';

export function About(): ReactElement {
  const navigate = useNavigate();
  return (
    <Typography sx={{ color: 'primary.main', fontWeight: 'bold' }} variant="h1">
      <span onClick={() => navigate({ to: '/' })}>About</span>
    </Typography>
  );
}
