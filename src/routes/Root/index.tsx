import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container } from '@mui/material';
import { NavBar, NavDrawer } from '@components';

export function Root() {
  return (
    <>
      <NavBar />
      <NavDrawer />
      <Container maxWidth={false} disableGutters sx={{ px: 0.5, py: 0.5 }}>
        <Outlet />
      </Container>
      <ToastContainer theme="dark" />
    </>
  );
}
