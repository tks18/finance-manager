import { Outlet } from 'react-router-dom';

import { useBackendApi } from '@plugins/backend/hooks';
import { useAuthOutletContext } from '@routes/Auth/hooks';

export function AuthDataRoot() {
  const apiConfig = useBackendApi();
  const { userToken } = useAuthOutletContext();

  return <Outlet context={{ config: apiConfig, userToken }} />;
}
