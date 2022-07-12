import React from 'react';
import {AppBar, Box, Button, Container, Grid, IconButton, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {Product} from './product/Product';
import {Navigate, NavLink} from 'react-router-dom';
import {useAppSelector} from '../../utils/redux-utils';
import {selectIsLoggedIn} from '../auth/selectors';
import {PATH} from '../../app/App';


export const Catalog = () => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    if (!isLoggedIn) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar style={{marginBottom: 20}} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        {/*News*/}
                    </Typography>
                    <div>{999}$</div>
                    <Button color="inherit"><NavLink to={'/cart'}>CART</NavLink></Button>
                </Toolbar>
            </AppBar>

            <Container>
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                        {Array.from(Array(20)).map((_, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <Product/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>

        </Box>
    );
};