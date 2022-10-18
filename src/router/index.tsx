import type { Route } from '@tanstack/react-location';

export const routes: Route[] = [
  {
    path: '/',
    element: () => import('../routes').then((Module) => <Module.Home />),
  },
  {
    path: '/about',
    element: () => import('../routes').then((Module) => <Module.About />),
  },
];
