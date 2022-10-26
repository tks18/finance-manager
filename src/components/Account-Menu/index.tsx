import { useState } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import { AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@plugins/store';
import { userSelectors, userWorkflows } from '@plugins/store';

export function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userisVerified = useAppSelector(userSelectors.isVerified);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = userisVerified
    ? [
        {
          title: 'Profile',
          onClick: () => {
            navigate('/auth/user');
            handleClose();
          },
        },
        {
          title: 'Logout',
          onClick: () => {
            userWorkflows.signOut(dispatch, navigate);
            handleClose();
          },
        },
      ]
    : [
        {
          title: 'Login / Register',
          onClick: () => {
            navigate('/auth');
            handleClose();
          },
        },
      ];

  return (
    <>
      <IconButton onClick={handleMenu} size="large" color="inherit">
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={item.onClick}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
