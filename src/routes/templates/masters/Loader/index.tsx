import { Skeleton, Box } from '@mui/material';

export function Loader() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Skeleton variant="rounded" animation="wave" width={210} height={60} />
    </Box>
  );
}
