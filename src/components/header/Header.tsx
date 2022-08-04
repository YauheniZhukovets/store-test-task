import React, { FC } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { removeUser } from 'store/reducers/authReducer';
import { selectOrder } from 'store/selectors/selectors';
import { sumOrder } from 'utils/sumOrder';

type HeaderPropsType = {
  url: string;
  name: string;
};

export const Header: FC<HeaderPropsType> = ({ url, name }) => {
  const dispatch = useAppDispatch();

  const orders = useAppSelector(selectOrder);

  const onRemoveUserClick = () => {
    dispatch(removeUser());
  };

  return (
    <Box style={{ marginBottom: '80px' }} sx={{ flexGrow: 1 }}>
      <AppBar style={{ marginBottom: 20 }} position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
          <Button onClick={onRemoveUserClick} color="error">
            Log out
          </Button>
          <span>{sumOrder(orders)}</span>
          <Button color="inherit">
            <NavLink to={url}>{name}</NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
