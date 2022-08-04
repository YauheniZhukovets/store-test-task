import React, { FC } from 'react';

import { Box, Container, Grid, Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';

import { DataUser } from './dataUser/DataUser';
import { ItemsInCart } from './itemInCart/ItemsInCart';

import { PATH } from 'App';
import { Header } from 'components/header/Header';
import { useAppSelector } from 'hooks/redux-hooks';
import { useAuth } from 'hooks/useAuth';
import { selectOrder } from 'store/selectors/selectors';
import { sumOrder } from 'utils/sumOrder';

export const Cart: FC = () => {
  const order = useAppSelector(selectOrder);

  const { isAuth } = useAuth();

  return !isAuth ? (
    <Navigate to={PATH.LOGIN} />
  ) : (
    <Box sx={{ flexGrow: 1 }}>
      <Header url="/" name="MENU" />

      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={12}>
            <Grid item xs={8} style={{ height: '74vh', overflowY: 'auto' }}>
              {order.map(item => (
                <ItemsInCart key={item.id} item={item} />
              ))}
            </Grid>
            <Grid item xs={4}>
              <DataUser />
            </Grid>
          </Grid>
          <Typography variant="h6" component="div" style={{ margin: 30 }}>
            {order.length !== 0 && <b>TOTAL: {sumOrder(order)}</b>}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
