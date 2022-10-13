import { Router, ReactLocation, Outlet } from '@tanstack/react-location';
import { routes } from '@router';

import { RouterProps } from '@tanstack/react-location';

const location = new ReactLocation();

type TRouterProps = Omit<RouterProps, 'location' | 'routes'> & {
  prependChildren?: React.ReactNode;
  appendChildren?: React.ReactNode;
};

export function RouterProvider(props: TRouterProps) {
  const { prependChildren, appendChildren } = props;
  return (
    <Router location={location} routes={routes}>
      {prependChildren}
      <Outlet />
      {appendChildren}
    </Router>
  );
}
