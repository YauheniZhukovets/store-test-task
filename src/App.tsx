import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Catalog} from './features/catalog/Сatalog';
import {Cart} from './features/cart/Cart';
import {Error404} from './component/error404/Error404';


export const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Catalog/>}/>
            <Route path={'/cart'} element={<Cart/>}/>
            <Route path={'*'} element={<Error404/>}/>
        </Routes>
    );
}
