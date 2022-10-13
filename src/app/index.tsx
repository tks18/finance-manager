import {
  StoreProvider,
  ThemeProvider,
  RouterProvider,
  NavBar,
  NavDrawer,
} from '@components';

export function App() {
  const RouterPrependComponents = () => {
    return (
      <>
        <NavBar />
        <NavDrawer />
      </>
    );
  };

  return (
    <StoreProvider>
      <ThemeProvider>
        <RouterProvider prependChildren={<RouterPrependComponents />} />
      </ThemeProvider>
    </StoreProvider>
  );
}
