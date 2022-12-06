import { LocalizationProvider as LP } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';

import type { LocalizationProviderProps } from '@mui/x-date-pickers';

export function LocalizationProvider(
  props: Omit<LocalizationProviderProps, 'dateAdapter'>,
) {
  const { children, ...otherProps } = props;
  return (
    <LP dateAdapter={AdapterLuxon} {...otherProps}>
      {children}
    </LP>
  );
}
