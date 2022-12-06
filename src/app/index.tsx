import { StoreProvider, ThemeProvider } from '@components';
import { RouterProvider, LocalizationProvider } from '@components';

export function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <LocalizationProvider>
          <RouterProvider />
        </LocalizationProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}
