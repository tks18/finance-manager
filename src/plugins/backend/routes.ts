export const routes = {
  api: {
    data: {
      masters: {
        assets: {
          categories: '/api/data/masters/assets/categories',
          master: '/api/data/masters/assets/master',
        },
        calendar: {
          getDateId: '/api/data/masters/calendar/get-date-id',
        },
        banks: '/api/data/masters/banks',
        creditCards: '/api/data/masters/credit-cards',
        debitCards: '/api/data/masters/debit-cards',
        emi: '/api/data/masters/emi',
        expenses: {
          categories: '/api/data/masters/expenses/categories',
          master: '/api/data/masters/expenses/master',
        },
        incomes: {
          categories: '/api/data/masters/incomes/categories',
          sources: '/api/data/masters/incomes/sources',
          master: '/api/data/masters/incomes/master',
        },
        insurances: '/api/data/masters/insurances',
        investments: {
          categories: '/api/data/masters/investments/categories',
          master: '/api/data/masters/investments/master',
          agent: '/api/data/masters/investments/agents',
        },
      },
      transactions: {
        calendar: '/api/data/transactions/calendar',
        expenses: '/api/data/transactions/expenses',
        incomes: '/api/data/transactions/incomes',
        investments: '/api/data/transactions/investments',
        marketData: '/api/data/transactions/market-data',
        openingBalances: '/api/data/transactions/opening-balances',
      },
      transactionsNonStandard: {
        marketData: {
          updateMarketData:
            '/api/data/transactions/market-data/update-market-data',
        },
      },
    },
    setup: {
      buildCalendar: '/api/setup/build-calendar',
    },
    user: {
      register: '/api/user/add',
      login: '/api/user/login',
      get: '/api/user/get',
      verify: '/api/user/verify',
    },
  },
};
