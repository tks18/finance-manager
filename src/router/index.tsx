import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { dbApiConfig } from '@plugins/backend/api';
import {
  Root,
  Home,
  Access,
  AuthRoot,
  AuthDataRoot,
  AuthDataHome,
  AuthSettingsRoot,
  AuthSettingsCalendar,
  AuthSettingsInvestmentMasterData,
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
        path: '/access',
        element: <Access />,
      },
      {
        path: '/auth',
        element: <AuthRoot />,
        children: [
          ...dbApiConfig.map((config) => ({
            path: `/auth${config.path}`,
            element: <AuthDataRoot />,
            children: [
              {
                path: `/auth${config.path}`,
                element: <AuthDataHome />,
              },
            ],
          })),
          {
            path: '/auth/settings',
            element: <AuthSettingsRoot />,
            children: [
              {
                path: '/auth/settings/calendar',
                element: <AuthSettingsCalendar />,
              },
              {
                path: '/auth/settings/investment-market-data',
                element: <AuthSettingsInvestmentMasterData />,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
