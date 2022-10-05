import { Home, About } from '../routes';

import type { Route } from '@tanstack/react-location';

export const routes: Route[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
];
