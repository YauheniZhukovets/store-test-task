import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Catalog} from '../features/catalog/Сatalog';
import {Cart} from '../features/cart/Cart';
import {Error404} from '../component/error404/Error404';
import {LoginPages} from '../features/auth/LoginPages';
import {RegisterPages} from '../features/auth/RegisterPages';

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/register',
    CATALOG: '/',
    CART: '/cart',
    ERROR: '/*'
}

export const App = () => {

    return (
        <Routes>
            <Route path={PATH.LOGIN} element={<LoginPages/>}/>
            <Route path={PATH.REGISTRATION} element={<RegisterPages/>}/>
            <Route path={PATH.CATALOG} element={<Catalog/>}/>
            <Route path={PATH.CART} element={<Cart/>}/>
            <Route path={PATH.ERROR} element={<Error404/>}/>
        </Routes>
    );
}
