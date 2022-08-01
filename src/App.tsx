import './App.css';
import { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Cart } from 'components/cart/Cart';
import { Catalog } from 'components/catalog/Сatalog';
import { useAppDispatch } from 'hooks/redux-hooks';
import { LoginPages } from 'pages/auth/LoginPages';
import { RegisterPages } from 'pages/auth/RegisterPages';
import { Error404 } from 'pages/pageNotFound/Error404';
import { fetchCatalog } from 'store/reducers/catalogReducer';

export const PATH = {
  LOGIN: '/login',
  REGISTRATION: '/register',
  CATALOG: '/',
  CART: '/cart',
  ERROR: '/*',
};

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={PATH.LOGIN} element={<LoginPages />} />
      <Route path={PATH.REGISTRATION} element={<RegisterPages />} />
      <Route path={PATH.CATALOG} element={<Catalog />} />
      <Route path={PATH.CART} element={<Cart />} />
      <Route path={PATH.ERROR} element={<Error404 />} />
    </Routes>
  );
};
