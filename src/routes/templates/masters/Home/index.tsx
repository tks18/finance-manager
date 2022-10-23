import { LinkButton, DataGrid } from '@components';
import { Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Loader } from '../Loader';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMasterOutletContext } from '../hooks';
import { useAppSelector, userSelectors } from '@plugins/store';
import { prepareDataforGrid } from '@helpers';

// Types
import { IGridRow, IGridColumn } from '@helpers/types';

export function MasterHome() {
  const navigate = useNavigate();
  const { config } = useMasterOutletContext();
  const userToken = useAppSelector(userSelectors.userToken);

  const { api, componentOptions } = config;
  const { title } = componentOptions;

  const [isMasterDataLoading, setMasterDataLoading] = useState<boolean>(false);

  const [gridConfig, setGridConfig] = useState<{
    rows: IGridRow[];
    cols: IGridColumn[];
  }>({
    rows: [],
    cols: [],
  });

  useEffect(() => {
    const getMasterData = async () => {
      setMasterDataLoading(true);
      if (userToken) {
        const masterDocsResponse = await api.get(userToken, {
          options: {
            filter: {
              date: {
                between: ['2020-01-01', '2020-02-28'],
              },
            },
            include: [
              'masterTables.calendar.expenses',
              'masterTables.calendar.incomes',
            ],
          },
        });

        const {
          data: { docs },
        } = masterDocsResponse;

        const gridConf = prepareDataforGrid(docs);
        setGridConfig(gridConf);

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
        <Grid xs={12} sx={{ display: 'flex', height: '80vh', my: 1, mx: 1 }}>
          {isMasterDataLoading ? <Loader /> : <DataGrid config={gridConfig} />}
        </Grid>
      </Grid>
    </Grid>
  );
}
