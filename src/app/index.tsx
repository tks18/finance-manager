import { StoreProvider, ThemeProvider } from '@components';
import { RouterProvider } from '@components';

export function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </StoreProvider>
  );
}
