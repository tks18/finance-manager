import {
  ReceiptLong as ReceiptLongIcon,
  CurrencyExchange as CurrencyExchangeIcon,
  PointOfSale as PointOfSaleIcon,
  Payments as PaymentsIcon,
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
  SupportAgent as SupportAgentIcon,
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
    path: '/auth/transactions',
    list: [
      {
        name: 'Income',
        icon: <CurrencyExchangeIcon />,
        path: '/auth/transactions/incomes',
      },
      {
        name: 'Expense',
        icon: <PointOfSaleIcon />,
        path: '/auth/transactions/expenses',
      },
      {
        name: 'Investments',
        icon: <ShowChartIcon />,
        path: '/auth/transactions/investments',
      },
      {
        name: 'Market Data',
        icon: <BarChartIcon />,
        path: '/auth/transactions/market-data',
      },
    ],
  },
  {
    name: 'Manage Core Masters',
    icon: <HubIcon />,
    path: '/auth/masters',
    list: [
      {
        name: 'Income',
        icon: <CurrencyExchangeIcon />,
        path: '/auth/masters/incomes',
        list: [
          {
            name: 'Income Categories',
            icon: <CategoryIcon />,
            path: '/auth/masters/incomes/categories',
          },
          {
            name: 'Income Sources',
            icon: <PaymentsIcon />,
            path: '/auth/masters/incomes/sources',
          },
          {
            name: 'Income Master',
            icon: <StorageIcon />,
            path: '/auth/masters/incomes/master',
          },
        ],
      },
      {
        name: 'Expense',
        icon: <PointOfSaleIcon />,
        path: '/auth/masters/expenses',
        list: [
          {
            name: 'Expense Categories',
            icon: <CategoryIcon />,
            path: '/auth/masters/expenses/categories',
          },
          {
            name: 'Expense Master',
            icon: <StorageIcon />,
            path: '/auth/masters/expenses/master',
          },
        ],
      },
      {
        name: 'Investment',
        icon: <ShowChartIcon />,
        path: '/auth/masters/investments',
        list: [
          {
            name: 'Investment Categories',
            icon: <CategoryIcon />,
            path: '/auth/masters/investments/categories',
          },
          {
            name: 'Investment Master',
            icon: <StorageIcon />,
            path: '/auth/masters/investments/master',
          },
          {
            name: 'Investment Agents',
            icon: <SupportAgentIcon />,
            path: '/auth/masters/investments/agents',
          },
        ],
      },
      {
        name: 'Asset',
        icon: <ApartmentIcon />,
        path: '/auth/masters/asset',
        list: [
          {
            name: 'Asset Categories',
            icon: <CategoryIcon />,
            path: '/auth/masters/assets/categories',
          },
          {
            name: 'Asset Master',
            icon: <StorageIcon />,
            path: '/auth/masters/assets/master',
          },
        ],
      },
    ],
  },
  {
    name: 'Manage Other Masters',
    path: '/auth/masters',
    icon: <OtherHousesIcon />,
    list: [
      {
        name: 'Banks',
        icon: <AccountBalanceWalletIcon />,
        path: '/auth/masters/banks',
      },
      {
        name: 'Credit Cards',
        icon: <CreditCardIcon />,
        path: '/auth/masters/credit-cards',
      },
      {
        name: 'Debit Cards',
        icon: <CreditCardIcon />,
        path: '/auth/masters/debit-cards',
      },
      {
        name: 'EMIs',
        icon: <LocalAtmIcon />,
        path: '/auth/masters/emi',
      },
      {
        name: 'Insurances',
        icon: <HealingIcon />,
        path: '/auth/masters/insurances',
      },
    ],
  },
  {
    name: 'Application Setup',
    icon: <SettingsIcon />,
    path: '/auth/settings',
    list: [
      {
        name: 'Setup / Update Calendar',
        icon: <CalendarMonthIcon />,
        path: '/auth/settings/calendar',
      },
      {
        name: 'Update Market Data',
        icon: <ShowChartIcon />,
        path: '/auth/settings/investment-market-data',
      },
    ],
  },
];

export const nonAuthNavigationList: INavigationList[] = [
  {
    name: 'Login / Register',
    path: '/access',
    icon: <PersonIcon />,
    list: [
      {
        name: 'Login',
        icon: <LoginIcon />,
        path: '/access',
      },
      {
        name: 'Register',
        icon: <VpnKeyIcon />,
        path: '/access',
      },
    ],
  },
];
