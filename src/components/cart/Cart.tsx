import React, { FC } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

import { DataUser } from './dataUser/DataUser';
import { ItemsInCart } from './itemInCart/ItemsInCart';

const LENGTH_ARRAY = 20;
const MULTIPLY_NUM = 10;

export const Cart: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ marginBottom: 20 }} position="static">
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* News */}
          </Typography>
          <Button color="inherit">
            <NavLink to="/">MENU</NavLink>
          </Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={12}>
            <Grid item xs={8} style={{ height: '78vh', overflowY: 'auto' }}>
              {Array.from(Array(LENGTH_ARRAY)).map(() => (
                <ItemsInCart key={Math.random() * MULTIPLY_NUM} />
              ))}
            </Grid>
            <Grid item xs={4}>
              <DataUser />
            </Grid>
          </Grid>
          <Typography variant="h6" component="div" style={{ margin: 30 }}>
            <b>TOTAL: {99999}</b>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
