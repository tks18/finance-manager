import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { routes } from '../router';
import { Router, ReactLocation, Outlet } from '@tanstack/react-location';

const location = new ReactLocation();

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      <Router location={location} routes={routes}>
        <Outlet />
      </Router>
    </ThemeProvider>
  );
}

export default App;
