import { forwardRef } from 'react';
import { Button as BT } from '@mui/material';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

// Types
import type { ButtonProps } from '@mui/material';

export function LinkButton(props: ButtonProps & RouterLinkProps) {
  const LinkBehavior = forwardRef<any, Omit<RouterLinkProps, 'to'>>(
    (props, ref) => <RouterLink to="/" ref={ref} {...props} role={undefined} />,
  );

  return <BT LinkComponent={LinkBehavior} {...props} />;
}
