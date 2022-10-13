import { forwardRef } from 'react';
import { Button as BT } from '@mui/material';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from '@tanstack/react-location';

// Types
import type { ButtonProps } from '@mui/material';

export function LinkButton(props: ButtonProps & RouterLinkProps) {
  const LinkBehavior = forwardRef<any, Omit<RouterLinkProps, 'to'>>(
    (props, ref) => <RouterLink _ref={ref} {...props} role={undefined} />,
  );

  return <BT LinkComponent={LinkBehavior} {...props} />;
}
