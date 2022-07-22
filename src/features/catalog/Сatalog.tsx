import React, {useEffect} from 'react';
import {AppBar, Box, Button, Container, Grid, IconButton, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {Product} from './product/Product';
import {Navigate, NavLink} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/redux-hooks';
import {PATH} from '../../app/App';
import {useAuth} from '../../hooks/useAuth';
import {removeUser} from '../auth/authReducer';
import {fetchCatalog} from './catalogReducer';


export const Catalog = () => {
    const dispatch = useAppDispatch()
    const {isAuth} = useAuth()

    useEffect(() => {
        dispatch(fetchCatalog())
    }, [dispatch])

    return !isAuth ?
        <Navigate to={PATH.LOGIN}/>
        : (
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
                        </Typography>
                        <Button onClick={() => dispatch(removeUser())} color="error">Log out</Button>
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
