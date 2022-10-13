import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@plugins/store';

import type { ProviderProps } from 'react-redux';

export function StoreProvider(props: Omit<ProviderProps, 'store'>) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
}
