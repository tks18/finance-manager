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

export const navigationList: INavigationList[] = [
  {
    name: 'Manage Transactions',
    icon: <ReceiptLongIcon />,
    path: '/transactions',
    list: [
      {
        name: 'Income',
        icon: <CurrencyExchangeIcon />,
        path: '/transactions/income',
      },
      {
        name: 'Expense',
        icon: <PointOfSaleIcon />,
        path: '/transactions/expense',
      },
      {
        name: 'Investments',
        icon: <ShowChartIcon />,
        path: '/transactions/investment',
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
        path: '/masters/income',
        list: [
          {
            name: 'Income Categories',
            icon: <CategoryIcon />,
            path: '/masters/income/categories',
          },
          {
            name: 'Income Master',
            icon: <StorageIcon />,
            path: '/masters/income/master',
          },
        ],
      },
      {
        name: 'Expense',
        icon: <PointOfSaleIcon />,
        path: '/masters/expense',
        list: [
          {
            name: 'Expense Categories',
            icon: <CategoryIcon />,
            path: '/masters/expense/categories',
          },
          {
            name: 'Expense Master',
            icon: <StorageIcon />,
            path: '/masters/expense/master',
          },
        ],
      },
      {
        name: 'Investment',
        icon: <ShowChartIcon />,
        path: '/masters/investment',
        list: [
          {
            name: 'Investment Categories',
            icon: <CategoryIcon />,
            path: '/masters/investment/categories',
          },
          {
            name: 'Investment Master',
            icon: <StorageIcon />,
            path: '/masters/investment/master',
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
            path: '/masters/asset/categories',
          },
          {
            name: 'Asset Master',
            icon: <StorageIcon />,
            path: '/masters/asset/master',
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
        path: '/masters/bank',
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
        path: '/masters/emis',
      },
      {
        name: 'Insurances',
        icon: <HealingIcon />,
        path: '/masters/insurances',
      },
    ],
  },
];
