import { DataGridPremium, GridToolbar } from '@mui/x-data-grid-premium';
import { useAuthDataHomeOutletContext } from '../hooks';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { constructDataGridObject } from '@/plugins';

import type { IDataGridObject } from '@/plugins';
import type { TGenericDocument } from '@plugins/backend/types';

export function AuthDataHomeView() {
  const { config, userToken } = useAuthDataHomeOutletContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiData, setApiData] = useState<TGenericDocument[] | null>(null);
  const [gridData, setGridData] = useState<IDataGridObject>({
    columns: [],
    rows: [],
  });

  useEffect(() => {
    setIsLoading(true);
    config.api
      .get(userToken, {
        options: {},
      })
      .then((apiResponse) => {
        if (apiResponse.status === 200) {
          const data = apiResponse.data.docs;
          setApiData(data);
          setIsLoading(false);
        } else {
          toast.error('Api Failed to Fetch Data');
          setIsLoading(false);
        }
      })
      .catch((apiError: Error) => {
        toast.error(`${apiError.name}: ${apiError.message}`);
        setIsLoading(false);
      });
  }, [config, userToken]);

  useEffect(() => {
    setIsLoading(true);
    if (apiData !== null) {
      const dataGridObject = constructDataGridObject(apiData);
      setGridData(dataGridObject);
      setIsLoading(false);
    }
  }, [apiData]);

  useEffect(() => {
    setIsLoading(true);
    if (apiData) {
      if (apiData.length < 1) {
        config.api
          .getColumns(userToken)
          .then((apiResponse) => {
            const columns = apiResponse.data;
            const columnGridObject: IDataGridObject = {
              columns: columns.map((column) => ({ field: column.column_name })),
              rows: [],
            };
            setGridData(columnGridObject);
          })
          .catch((apiError: Error) => {
            toast.error(`${apiError.name}: ${apiError.message}`);
            setIsLoading(false);
          });
      } else {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  }, [config, userToken, apiData]);

  return (
    <DataGridPremium
      rows={gridData.rows}
      columns={gridData.columns}
      getRowId={(data: { _id: number; [key: string]: any }) => {
        return data._id;
      }}
      loading={isLoading}
      pagination
      slots={{ toolbar: GridToolbar }}
    />
  );
}
