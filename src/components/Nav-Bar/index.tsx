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
} from '@mui/icons-material';
import { LinkButton, AccountMenu } from '@components';
import { settingsActions, useAppDispatch } from '@plugins/store';

export function NavBar() {
  const dispatch = useAppDispatch();

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
            <AccountMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
