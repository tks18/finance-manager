import { createTheme, responsiveFontSizes } from '@mui/material';
import common from '@mui/material/colors/common';

// Types
import type { ThemeOptions } from '@mui/material';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#9c27b0',
      contrastText: common.white,
    },
    secondary: {
      main: '#AE84B2',
      contrastText: common.white,
    },
    error: { main: '#FF5252', contrastText: common.white },
    info: { main: '#2196F3', contrastText: common.white },
    success: { main: '#4CAF50', contrastText: common.white },
    warning: { main: '#FFC107', contrastText: common.black },
  },
};

const appTheme = createTheme(themeOptions);
export const theme = responsiveFontSizes(appTheme);
