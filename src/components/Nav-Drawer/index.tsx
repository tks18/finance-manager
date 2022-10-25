import { useState, Fragment } from 'react';
import { Box, Divider, Drawer } from '@mui/material';
import { List, ListItem, ListSubheader } from '@mui/material';
import { ListItemButton, ListItemIcon } from '@mui/material';
import { Collapse, ListItemText, Typography } from '@mui/material';
import { settingsSelectors, settingsActions } from '@plugins/store';
import { userSelectors } from '@plugins/store';
import { useAppSelector, useAppDispatch } from '@plugins/store';
import { useNavigate } from 'react-router-dom';
import { authNavigationList, nonAuthNavigationList } from './nav-list';

// Icons
import { AccountBalanceRounded as AppIcon } from '@mui/icons-material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { ExpandLess as ExpandLessIcon } from '@mui/icons-material';

// Types
import type { ReactNode } from 'react';
import type { ListProps } from '@mui/material';
import type { INavigationList } from './nav-list';

interface IRenderNestedListProps extends ListProps {
  title: string;
  path: string;
  toggleDrawer: (
    toggle: boolean,
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  navigate: (path: string) => void;
  prependIcon?: ReactNode;
  subItems?: INavigationList[];
}

export function RenderNestedList(props: IRenderNestedListProps) {
  const {
    title,
    path,
    prependIcon,
    subItems,
    toggleDrawer,
    navigate,
    ...otherProps
  } = props;
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <List {...otherProps}>
      <ListItem disablePadding>
        <ListItemButton
          onClick={(e) => {
            handleChange();
            !subItems && toggleDrawer(false)(e);
            !subItems && navigate(path);
          }}
        >
          {prependIcon && <ListItemIcon>{prependIcon}</ListItemIcon>}
          <ListItemText primary={title} />
          {subItems && (expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
        </ListItemButton>
      </ListItem>
      {subItems && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {subItems.map((item, index) =>
            item.list ? (
              <RenderNestedList
                key={index}
                title={item.name}
                path={item.path}
                prependIcon={item.icon}
                toggleDrawer={toggleDrawer}
                navigate={navigate}
                subItems={item.list}
              />
            ) : (
              <List key={index} component="div" disablePadding>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={(e) => {
                      navigate(item.path);
                      toggleDrawer(false)(e);
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              </List>
            ),
          )}
        </Collapse>
      )}
    </List>
  );
}

export function NavDrawer() {
  const navBarState = useAppSelector(settingsSelectors.selectNavBarSettings);
  const userisVerified = useAppSelector(userSelectors.isVerified);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const listToRender = userisVerified
    ? authNavigationList
    : nonAuthNavigationList;

  const toggleDrawer =
    (toggle: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      dispatch(settingsActions.toggleNavBar(toggle));
    };

  const navigateToString = (path: string) => navigate(path);

  return (
    <Drawer
      anchor="left"
      open={navBarState.toggle}
      onClose={toggleDrawer(false)}
    >
      <Box sx={{ width: 275 }} role="presentation">
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <AppIcon fontSize="large" sx={{ mt: 2 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Finance Manager
          </Typography>
        </Box>
        <List>
          {listToRender.map((item, index) => {
            return (
              <Fragment key={index}>
                <ListSubheader>{item.name}</ListSubheader>
                {item.list &&
                  item.list.map((item, index) => (
                    <RenderNestedList
                      key={index}
                      title={item.name}
                      path={item.path}
                      navigate={navigateToString}
                      prependIcon={item.icon}
                      subItems={item.list}
                      toggleDrawer={toggleDrawer}
                    />
                  ))}
              </Fragment>
            );
          })}
        </List>
        <Divider />
        <Box
          sx={{
            textAlign: 'center',
            my: 3,
          }}
        >
          <Typography variant="body1">Made by</Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
            Shan.tk 💖
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
}
