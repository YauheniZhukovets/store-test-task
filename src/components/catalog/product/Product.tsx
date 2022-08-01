import React from 'react';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

type ProductPropsType = {
  name: string;
  description: string;
  price: number;
};

export const Product = ({ price, name, description }: ProductPropsType) => {
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
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          <b>{price} BYN</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <NavLink to="/cart">Buy Now</NavLink>
        </Button>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
};
