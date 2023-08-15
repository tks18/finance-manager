import { LocalizationProvider as LP } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';

import type { DateTime } from 'luxon';
import type { LocalizationProviderProps } from '@mui/x-date-pickers';

export function LocalizationProvider(
  props: Omit<LocalizationProviderProps<DateTime, string>, 'dateAdapter'>,
) {
  const { children, ...otherProps } = props;
  return (
    <LP dateAdapter={AdapterLuxon} {...otherProps}>
      {children}
    </LP>
  );
}
