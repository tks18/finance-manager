import { ToastContainer } from 'react-toastify';
import { Container } from '@mui/material';
import { NavBar, NavDrawer } from '@components';

import type { PropsWithChildren } from 'react';

export function Layout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <>
      <NavBar />
      <NavDrawer />
      <Container maxWidth={false} disableGutters sx={{ px: 0.5, py: 0.5 }}>
        {children}
      </Container>
      <ToastContainer theme="dark" />
    </>
  );
}
