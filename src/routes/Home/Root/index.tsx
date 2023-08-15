import { HomeLogged } from '../Logged';
import { HomeNotLogged } from '../Not-Logged';

import { useAppSelector } from '@plugins/store';
import { userSelectors } from '@plugins/store';

export function Home() {
  const userIsAuthenticated = useAppSelector(userSelectors.isAuthenticated);
  const userIsVerified = useAppSelector(userSelectors.isVerified);

  return userIsAuthenticated && userIsVerified ? (
    <HomeLogged />
  ) : (
    <HomeNotLogged />
  );
}
