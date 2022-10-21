import { MainElement } from './main';
import { ErrorElement } from './error';
import { useBackendApi } from '@plugins/backend/hooks';

export function MasterRoute() {
  const apiConfig = useBackendApi();

  return apiConfig !== undefined ? <MainElement /> : <ErrorElement />;
}
