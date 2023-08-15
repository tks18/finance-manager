import { Outlet } from 'react-router-dom';

import { useAuthDataOutletContext } from '../../hooks';

export function AuthDataHomeRoot() {
  const context = useAuthDataOutletContext();

  return <Outlet context={context} />;
}
