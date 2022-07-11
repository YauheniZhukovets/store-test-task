import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import {NavLink} from 'react-router-dom';

export const Product = () => {
    return (
        <Card style={{margin: 20}} sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://via.placeholder.com/150"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><NavLink to={'/cart'}>Buy Now</NavLink></Button>
                <Button size="small">Add to cart</Button>
            </CardActions>
        </Card>
    );
};

