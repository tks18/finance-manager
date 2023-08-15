import { Typography, Unstable_Grid2 as Grid } from '@mui/material';
import {
  AddBox as AddBoxIcon,
  DeleteForever as DeleteForeverIcon,
  Storage as StorageIcon,
} from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

import { LinkButton } from '@components';
import { useAuthDataOutletContext } from '../../hooks';

const buttonList = [
  {
    title: 'Add',
    path: '/add',
    icon: <AddBoxIcon />,
  },
  {
    title: 'View',
    path: '/view',
    icon: <StorageIcon />,
  },
  {
    title: 'Delete',
    path: '/delete',
    icon: <DeleteForeverIcon />,
  },
];

export function AuthDataHomeHome() {
  const currentLocation = useLocation();
  const {
    config: {
      componentOptions: { title },
    },
  } = useAuthDataOutletContext();

  return (
    <Grid
      container
      xs={12}
      sx={{
        display: 'flex',
        alignContent: 'center',
        justifyItems: 'center',
      }}
    >
      <Grid xs={12}>
        <Typography
          sx={{
            color: 'primary.main',
            textAlign: 'center',
            fontWeight: 'bold',
            mt: 2,
            mb: 2,
          }}
          variant="h4"
        >
          Manage - {title}
        </Typography>
      </Grid>
      <Grid
        xs={12}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          my: 2,
        }}
      >
        {buttonList.map((btn, index) => {
          const fullPath = `${currentLocation.pathname}${btn.path}`;
          return (
            <LinkButton
              key={index}
              variant="contained"
              startIcon={btn.icon}
              to={fullPath}
              sx={{
                mx: 2,
              }}
            >
              {btn.title} - {title}
            </LinkButton>
          );
        })}
      </Grid>
    </Grid>
  );
}
