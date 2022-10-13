import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Container,
  IconButton,
} from '@mui/material';
import {
  AccountBalanceRounded as AppIcon,
  MenuRounded as MenuIcon,
  WbSunnyRounded as SunnyIcon,
  DarkModeRounded as DarkIcon,
} from '@mui/icons-material';
import { LinkButton } from '@components';
import {
  themeActions,
  themeSelectors,
  settingsActions,
  useAppSelector,
  useAppDispatch,
} from '@plugins/store';

export function NavBar() {
  const dispatch = useAppDispatch();

  const paletteMode = useAppSelector(themeSelectors.selectPaletteMode);

  const changeTheme = () => {
    dispatch(themeActions.updateMode());
  };

  return (
    <AppBar position="relative" variant="elevation" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            onClick={() => {
              dispatch(settingsActions.toggleNavBar(true));
            }}
          >
            <MenuIcon sx={{ color: 'primary.contrastText' }} />
          </IconButton>
          <LinkButton
            to="/"
            sx={{
              mr: 1,
              display: { xs: 'flex', md: 'flex' },
              flexGrow: { xs: 1, md: 0 },
              fontWeight: 900,
              color: 'primary.contrastText',
              textDecoration: 'none',
            }}
            startIcon={
              <Avatar sx={{ backgroundColor: 'primary.main' }}>
                <AppIcon sx={{ color: 'primary.contrastText' }} />
              </Avatar>
            }
          >
            Finance Manager
          </LinkButton>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'right',
            }}
          >
            <IconButton
              sx={{ mr: { xs: 0.5, md: 1 }, color: 'primary.contrastText' }}
              onClick={changeTheme}
            >
              {paletteMode === 'dark' ? <DarkIcon /> : <SunnyIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
