import React from 'react';

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
import { Navigate, NavLink } from 'react-router-dom';

import { Product } from './product/Product';

import { PATH } from 'App';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { useAuth } from 'hooks/useAuth';
import { removeUser } from 'store/reducers/authReducer';
import { selectProducts } from 'store/selectors/selectors';

export const Catalog = () => {
  const products = useAppSelector(selectProducts);

  const dispatch = useAppDispatch();

  const { isAuth } = useAuth();

  return !isAuth ? (
    <Navigate to={PATH.LOGIN} />
  ) : (
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
          <Button onClick={() => dispatch(removeUser())} color="error">
            Log out
          </Button>
          <div>{999}$</div>
          <Button color="inherit">
            <NavLink to="/cart">CART</NavLink>
          </Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {products.map(({ id, name, price, description }) => (
              <Grid key={id} item xs={2} sm={4} md={4}>
                <Product name={name} price={price} description={description} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(LENGTH_ARRAY)).map(() => (
              <Grid key={Math.random() * MULTIPLY_NUM} item xs={2} sm={4} md={4}>
                <Product />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container> */}
    </Box>
  );
};
