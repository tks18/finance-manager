import { Outlet } from 'react-router-dom';
import { useAuthOutletContext } from '@routes/Auth/hooks';

export function AuthSettingsRoot() {
  const { userToken } = useAuthOutletContext();

  return <Outlet context={{ userToken }} />;
}
