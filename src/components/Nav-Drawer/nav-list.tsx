import {
  ReceiptLong as ReceiptLongIcon,
  CurrencyExchange as CurrencyExchangeIcon,
  PointOfSale as PointOfSaleIcon,
  ShowChart as ShowChartIcon,
  Hub as HubIcon,
  Apartment as ApartmentIcon,
  OtherHouses as OtherHousesIcon,
  AccountBalanceWallet as AccountBalanceWalletIcon,
  CreditCard as CreditCardIcon,
  LocalAtm as LocalAtmIcon,
  Healing as HealingIcon,
  Category as CategoryIcon,
  Storage as StorageIcon,
  Person as PersonIcon,
  Login as LoginIcon,
  VpnKey as VpnKeyIcon,
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  CalendarMonth as CalendarMonthIcon,
} from '@mui/icons-material';

// Types
import type { ReactNode } from 'react';

export interface INavigationList {
  name: string;
  icon: ReactNode;
  path: string;
  list?: INavigationList[];
  description?: string;
}

export const authNavigationList: INavigationList[] = [
  {
    name: 'Manage Transactions',
    icon: <ReceiptLongIcon />,
    path: '/transactions',
    list: [
      {
        name: 'Income',
        icon: <CurrencyExchangeIcon />,
        path: '/transactions/incomes',
      },
      {
        name: 'Expense',
        icon: <PointOfSaleIcon />,
        path: '/transactions/expenses',
      },
      {
        name: 'Investments',
        icon: <ShowChartIcon />,
        path: '/transactions/investments',
      },
      {
        name: 'Market Data',
        icon: <BarChartIcon />,
        path: '/transactions/market-data',
      },
    ],
  },
  {
    name: 'Manage Core Masters',
    icon: <HubIcon />,
    path: '/masters',
    list: [
      {
        name: 'Income',
        icon: <CurrencyExchangeIcon />,
        path: '/masters/incomes',
        list: [
          {
            name: 'Income Categories',
            icon: <CategoryIcon />,
            path: '/masters/incomes/categories',
          },
          {
            name: 'Income Master',
            icon: <StorageIcon />,
            path: '/masters/incomes/master',
          },
        ],
      },
      {
        name: 'Expense',
        icon: <PointOfSaleIcon />,
        path: '/masters/expenses',
        list: [
          {
            name: 'Expense Categories',
            icon: <CategoryIcon />,
            path: '/masters/expenses/categories',
          },
          {
            name: 'Expense Master',
            icon: <StorageIcon />,
            path: '/masters/expenses/master',
          },
        ],
      },
      {
        name: 'Investment',
        icon: <ShowChartIcon />,
        path: '/masters/investments',
        list: [
          {
            name: 'Investment Categories',
            icon: <CategoryIcon />,
            path: '/masters/investments/categories',
          },
          {
            name: 'Investment Master',
            icon: <StorageIcon />,
            path: '/masters/investments/master',
          },
        ],
      },
      {
        name: 'Asset',
        icon: <ApartmentIcon />,
        path: '/masters/asset',
        list: [
          {
            name: 'Asset Categories',
            icon: <CategoryIcon />,
            path: '/masters/assets/categories',
          },
          {
            name: 'Asset Master',
            icon: <StorageIcon />,
            path: '/masters/assets/master',
          },
        ],
      },
    ],
  },
  {
    name: 'Manage Other Masters',
    path: '/masters',
    icon: <OtherHousesIcon />,
    list: [
      {
        name: 'Banks',
        icon: <AccountBalanceWalletIcon />,
        path: '/masters/banks',
      },
      {
        name: 'Credit Cards',
        icon: <CreditCardIcon />,
        path: '/masters/credit-cards',
      },
      {
        name: 'Debit Cards',
        icon: <CreditCardIcon />,
        path: '/masters/debit-cards',
      },
      {
        name: 'EMIs',
        icon: <LocalAtmIcon />,
        path: '/masters/emi',
      },
      {
        name: 'Insurances',
        icon: <HealingIcon />,
        path: '/masters/insurances',
      },
    ],
  },
  {
    name: 'Application Setup',
    icon: <SettingsIcon />,
    path: '/settings',
    list: [
      {
        name: 'Setup / Update Calendar',
        icon: <CalendarMonthIcon />,
        path: '/settings/calendar',
      },
      {
        name: 'Update Market Data',
        icon: <ShowChartIcon />,
        path: '/settings/investment-market-data',
      },
    ],
  },
];

export const nonAuthNavigationList: INavigationList[] = [
  {
    name: 'Login / Register',
    path: '/auth',
    icon: <PersonIcon />,
    list: [
      {
        name: 'Login',
        icon: <LoginIcon />,
        path: '/auth',
      },
      {
        name: 'Register',
        icon: <VpnKeyIcon />,
        path: '/auth',
      },
    ],
  },
];
