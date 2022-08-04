import React, { FC } from 'react';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import { useAppDispatch } from 'hooks/redux-hooks';
import {
  addItemInOder,
  decrementItemInOder,
  deleteItemInOder,
  OrderType,
} from 'store/reducers/catalogReducer';

export type ItemsInCartPropsType = {
  item: OrderType;
};

export const ItemsInCart: FC<ItemsInCartPropsType> = ({ item }) => {
  const dispatch = useAppDispatch();

  const onAddItemClick = () => {
    dispatch(addItemInOder(item));
  };

  const onDecrementItemClick = () => {
    dispatch(decrementItemInOder(item));
  };

  const onDeleteItemClick = () => {
    dispatch(deleteItemInOder(item));
  };

  return (
    <Card style={{ margin: 10, display: 'flex' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://via.placeholder.com/140"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          <b>{item.price} BYN</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={item.count > 1 ? onDecrementItemClick : onDeleteItemClick}
          size="small"
        >
          <b>-</b>
        </Button>
        <Box>
          <b>{item.count}</b>
        </Box>
        <Button onClick={onAddItemClick} size="small">
          <b>+</b>
        </Button>
      </CardActions>
    </Card>
  );
};
