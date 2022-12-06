import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { dbApiConfig } from '@plugins/backend/api';
import { Root, Home, Auth, DataRoot, DataHome } from '@routes';

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
      ...dbApiConfig.map((config) => ({
        path: config.path,
        element: <DataRoot />,
        children: [
          {
            path: `${config.path}/`,
            element: <DataHome />,
          },
        ],
      })),
    ],
  },
];

export const router = createBrowserRouter(routes);
