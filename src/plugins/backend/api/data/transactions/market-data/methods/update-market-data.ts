import { routes } from '@plugins/backend';
import { requester } from '@plugins/backend';

import { TMarketDataUpdateMethodOutput } from '@plugins/backend/api/data/transactions/market-data/types';

export async function updateMarketData(token: string) {
  const response = await requester<null, TMarketDataUpdateMethodOutput>(
    'post',
    {
      url: routes.api.data.transactionsNonStandard.marketData.updateMarketData,
      token,
    },
  );
  return response;
}
