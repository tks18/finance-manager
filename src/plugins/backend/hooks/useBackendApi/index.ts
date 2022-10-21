import { useLocation } from 'react-router-dom';
import { dbApiConfig } from '@plugins/backend/api/data';

export function useBackendApi() {
  const currentLocation = useLocation();

  const [currentRouteApiConfig] = dbApiConfig.filter(
    (api) => api.path === currentLocation.pathname,
  );
  return currentRouteApiConfig;
}
