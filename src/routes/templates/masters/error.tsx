import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

export function ErrorElement() {
  const navigate = useNavigate();

  useEffect(() => {
    toast('Api Not Found for the Path, Redirecting you to Home.....', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
    setTimeout(() => {
      navigate('/');
    }, 3000);
  });

  return (
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
