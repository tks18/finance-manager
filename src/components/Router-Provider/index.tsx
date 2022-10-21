import { RouterProvider as RP } from 'react-router-dom';
import { router } from '@router';

import { RouterProviderProps } from 'react-router-dom';

type TRouterProps = Omit<RouterProviderProps, 'router'> & {
  prependChildren?: React.ReactNode;
  appendChildren?: React.ReactNode;
};

export function RouterProvider(props: TRouterProps) {
  return <RP router={router} {...props} />;
}
