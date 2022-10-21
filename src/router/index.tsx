import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Root, Home, MasterRoute, TransactionRoute } from '@routes';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/transactions/calendar',
        element: <Home />,
      },
      {
        path: '/transactions/*',
        element: <TransactionRoute />,
      },
      {
        path: '/masters/*',
        element: <MasterRoute />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
