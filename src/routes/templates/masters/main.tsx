import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useBackendApi } from '@plugins/backend/hooks';

export function MainElement() {
  const navigate = useNavigate();
  const apiConfig = useBackendApi();
  return (
    <Typography sx={{ color: 'primary.main', fontWeight: 'bold' }} variant="h1">
      <span onClick={() => navigate('/')}>
        {apiConfig.componentOptions.title}
      </span>
    </Typography>
  );
}
