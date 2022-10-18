export const routes = {
  api: {
    data: {
      masters: {
        assets: {
          categories: '/api/masters/assets/categories',
          master: '/api/masters/assets/master',
        },
        banks: '/api/masters/banks',
        creditCards: '/api/masters/credit-cards',
        debitCards: '/api/masters/debit-cards',
        emi: '/api/masters/emi',
        expenses: {
          categories: '/api/masters/expenses/categories',
          master: '/api/masters/expenses/master',
        },
        incomes: {
          categories: '/api/masters/incomes/categories',
          master: '/api/masters/incomes/master',
        },
        insurances: '/api/masters/insurances',
        investments: {
          categories: '/api/masters/investments/categories',
          master: '/api/masters/investments/master',
        },
      },
      transactions: {
        calendar: '/api/transactions/calendar',
        expenses: '/api/transactions/expenses',
        incomes: '/api/transactions/incomes',
        investments: '/api/transactions/investments',
        openingBalances: '/api/transactions/opening-balances',
      },
    },
    setup: {
      buildCalendar: '/api/setup/build-calendar',
    },
    user: {
      register: '/api/user/register',
      login: '/api/user/login',
      get: '/api/user/get',
      verify: '/api/user/verify',
    },
  },
};
