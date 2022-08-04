import React from 'react';

import { Box, Container, Grid } from '@mui/material';
import { Navigate } from 'react-router-dom';

import { Product } from './product/Product';

import { PATH } from 'App';
import { Header } from 'components/header/Header';
import { useAppSelector } from 'hooks/redux-hooks';
import { useAuth } from 'hooks/useAuth';
import { selectProducts } from 'store/selectors/selectors';

export const Catalog = () => {
  const products = useAppSelector(selectProducts);

  const { isAuth } = useAuth();

  return !isAuth ? (
    <Navigate to={PATH.LOGIN} />
  ) : (
    <Box sx={{ flexGrow: 1 }}>
      <Header url="/cart" name="CART" />

      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {products.map(product => (
              <Grid key={product.id} item xs={2} sm={4} md={4}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
