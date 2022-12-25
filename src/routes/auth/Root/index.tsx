import { Outlet } from 'react-router-dom';
import { useAppSelector } from '@plugins/store';
import { userSelectors, userHooks } from '@plugins/store';

export function AuthRoot() {
  const userToken = useAppSelector(userSelectors.userToken);

  userHooks.useVerify('/access');

  return <Outlet context={{ userToken }} />;
}
