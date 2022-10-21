import { Outlet } from 'react-router-dom';
import { StoreProvider, ThemeProvider, NavBar, NavDrawer } from '@components';
import { ToastContainer } from 'react-toastify';

export function Root() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <NavBar />
        <NavDrawer />
        <Outlet />
        <ToastContainer />
      </ThemeProvider>
    </StoreProvider>
  );
}
