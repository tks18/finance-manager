import { useLocation } from 'react-router-dom';
import { dbApiConfig } from '@plugins/backend/api/data';

function filterPathNames(pathName: string): string {
  const filters = ['/add', '/delete', '/view'];
  const splittedText = filters.reduce((previousValue, currentValue, index) => {
    if (index === 1) {
      return pathName.replace(previousValue, '').replace(currentValue, '');
    } else {
      return previousValue.replace(currentValue, '');
    }
  });
  return splittedText;
}

export function useBackendApi() {
  const currentLocation = useLocation();

  const filteredPathname = filterPathNames(currentLocation.pathname);

  const [currentRouteApiConfig] = dbApiConfig.filter(
    (api) => `/auth${api.path}` === filteredPathname,
  );
  return currentRouteApiConfig;
}
