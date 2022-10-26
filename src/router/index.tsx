import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { dbApiConfig } from '@plugins/backend/api';
import {
  Root,
  Home,
  Auth,
  MasterRoot,
  MasterHome,
  TransactionRoute,
} from '@routes';

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
        path: '/auth',
        element: <Auth />,
      },
      {
        path: '/transactions/calendar',
        element: <Home />,
      },
      ...dbApiConfig
        .filter((config) => config.tableType === 'master')
        .map((config) => ({
          path: config.path,
          element: <MasterRoot />,
          children: [
            {
              path: `${config.path}/`,
              element: <MasterHome />,
            },
          ],
        })),
      ...dbApiConfig
        .filter((config) => config.tableType === 'transaction')
        .filter((config) => config.modelName !== 'CalendarMaster')
        .map((config) => ({
          path: config.path,
          element: <TransactionRoute />,
        })),
    ],
  },
];

export const router = createBrowserRouter(routes);
