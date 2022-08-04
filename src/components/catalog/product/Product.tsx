import React, { FC } from 'react';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

import { useAppDispatch } from 'hooks/redux-hooks';
import { addItemInOder, ProductType } from 'store/reducers/catalogReducer';

type ProductPropsType = {
  product: ProductType;
};

export const Product: FC<ProductPropsType> = ({ product }) => {
  const dispatch = useAppDispatch();

  const onAddItemClick = () => {
    const item = {
      id: product.id,
      count: 1,
      name: product.name,
      description: product.description,
      price: product.price,
    };

    dispatch(addItemInOder(item));
  };

  return (
    <Card style={{ margin: 20 }} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://via.placeholder.com/150"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          <b>{product.price} BYN</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onAddItemClick} size="small">
          <NavLink to="/cart">Buy Now</NavLink>
        </Button>
        <Button onClick={onAddItemClick} size="small">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
