import { Outlet } from 'react-router-dom';
import { useBackendApi } from '@plugins/backend/hooks';

export function MasterRoot() {
  const apiConfig = useBackendApi();

  return <Outlet context={{ config: apiConfig }} />;
}
