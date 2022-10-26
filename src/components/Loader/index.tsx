import { Skeleton, Box, Unstable_Grid2 as Grid } from '@mui/material';

interface ILoaderProps {
  loaderText: string;
}

export function Loader({ loaderText }: ILoaderProps) {
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
      <Grid container rowSpacing={1} width="100%">
        <Grid
          xs={12}
          width="100%"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{ width: { xs: '90%', md: '50%' }, display: 'flex', my: 0.5 }}
          >
            <Skeleton
              sx={{
                width: 45,
                height: 45,
                mx: 1,
              }}
              variant="circular"
              animation="wave"
            />
            <Box
              sx={{
                flex: 1,
                height: { xs: '90%', md: '50%' },
              }}
            >
              <Skeleton variant="rounded" animation="wave" sx={{ mb: 0.5 }} />
              <Skeleton variant="rounded" animation="wave" sx={{ mt: 0.5 }} />
            </Box>
          </Box>
        </Grid>
        <Grid
          width="100%"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{ width: { xs: '90%', md: '50%' }, display: 'flex', my: 0.5 }}
          >
            <Skeleton
              variant="rounded"
              animation="pulse"
              height={150}
              width="100%"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {loaderText}
            </Skeleton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
