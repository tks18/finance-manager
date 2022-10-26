import { Outlet } from 'react-router-dom';

import { useAppSelector } from '@plugins/store';
import { userSelectors, userHooks } from '@plugins/store';
import { useBackendApi } from '@plugins/backend/hooks';
export function MasterRoot() {
  const apiConfig = useBackendApi();
  const userToken = useAppSelector(userSelectors.userToken);

  userHooks.useVerify();

  return <Outlet context={{ config: apiConfig, userToken }} />;
}
