import { Outlet } from 'react-router-dom';
import { Layout } from '@components';

export function Root() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
