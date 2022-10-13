import { ThemeProvider as TProvider, CssBaseline } from '@mui/material';
import { themeSelectors, useAppSelector } from '@plugins/store';

import { createTheme, responsiveFontSizes } from '@mui/material';

// Types
import type { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';

export function ThemeProvider(props: Omit<ThemeProviderProps, 'theme'>) {
  const { children } = props;

  const themeConfig = useAppSelector(themeSelectors.selectThemeConfig);

  const theme = responsiveFontSizes(createTheme(themeConfig));

  return (
    <TProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </TProvider>
  );
}
