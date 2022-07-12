import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Catalog} from '../features/catalog/Сatalog';
import {Cart} from '../features/cart/Cart';
import {Error404} from '../component/error404/Error404';
import {Login} from '../features/auth/Login';
import {Registration} from '../features/auth/Registration';

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    CATALOG: '/',
    CART: '/cart',
    ERROR: '/*'
}

export const App = () => {

    return (
        <Routes>
            <Route path={PATH.LOGIN} element={<Login/>}/>
            <Route path={PATH.REGISTRATION} element={<Registration/>}/>
            <Route path={PATH.CATALOG} element={<Catalog/>}/>
            <Route path={PATH.CART} element={<Cart/>}/>
            <Route path={PATH.ERROR} element={<Error404/>}/>
        </Routes>
    );
}
