import { ThemeProvider, CssBaseline } from '@mui/material';
import { Router, ReactLocation, Outlet } from '@tanstack/react-location';
import { routes } from '@router';
import { theme } from './theme';

const location = new ReactLocation();

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Router location={location} routes={routes}>
        <Outlet />
      </Router>
    </ThemeProvider>
  );
}
