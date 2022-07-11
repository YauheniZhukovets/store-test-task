import React from 'react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';

export const ItemsInCart = () => {
    return (
            <Card style={{margin: 10, display: 'flex'}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://via.placeholder.com/140"
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
                    <Button size="small"><b>-</b></Button>
                    <Box><b>12</b></Box>
                    <Button size="small"><b>+</b></Button>
                </CardActions>
            </Card>
    );
};
