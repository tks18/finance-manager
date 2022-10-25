import { useState, useEffect } from 'react';
import { Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { LinkButton, DataGrid } from '@components';
import { useAppSelector, userSelectors } from '@plugins/store';
import { MasterLoader } from '../Loader';
import { useMasterOutletContext } from '../hooks';

// Types
import { TGeneriCDocument } from '@plugins/backend/types';

export function MasterHome() {
  const navigate = useNavigate();
  const { config } = useMasterOutletContext();
  const userToken = useAppSelector(userSelectors.userToken);

  const { api, componentOptions } = config;
  const { title } = componentOptions;

  const [isMasterDataLoading, setMasterDataLoading] = useState<boolean>(false);
  const [masterData, setMasterData] = useState<TGeneriCDocument[]>([]);

  useEffect(() => {
    const getMasterData = async () => {
      setMasterDataLoading(true);
      if (userToken) {
        const masterDocsResponse = await api.get(userToken, {
          options: {
            filter: {},
            include: [],
          },
        });

        const {
          data: { docs },
        } = masterDocsResponse;

        setMasterData(docs);
        setMasterDataLoading(false);
      } else {
        navigate('/');
      }
    };
    getMasterData().catch(console.log);
  }, [api, userToken, navigate]);

  return (
    <Grid container rowSpacing={1}>
      <Grid xs={12}>
        <Typography
          sx={{ fontWeight: 'bold', textAlign: 'center' }}
          variant="h5"
        >
          Manage {title}
        </Typography>
      </Grid>
      <Grid xs={12} container>
        <Grid
          xs={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <LinkButton variant="contained" to={`${config.path}/create`}>
            Add / Edit Masters
          </LinkButton>
        </Grid>
        <Grid
          xs={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <LinkButton
            color="primary"
            variant="contained"
            to={`${config.path}/delete`}
          >
            Delete Masters
          </LinkButton>
        </Grid>
      </Grid>
      <Grid xs={12} container>
        <Grid xs={12}>
          <Typography
            sx={{ fontWeight: 'bold', textAlign: 'center' }}
            variant="subtitle1"
          >
            {title} Table
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sx={{
            display: 'flex',
            height: isMasterDataLoading ? '' : '80vh',
            my: 1,
            mx: 1,
          }}
        >
          {isMasterDataLoading ? (
            <MasterLoader />
          ) : (
            <DataGrid data={masterData} />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
