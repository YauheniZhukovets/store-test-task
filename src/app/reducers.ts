import {combineReducers} from '@reduxjs/toolkit';
import { authReducer } from '../features/auth/authReducer';
import {catalogReducer} from '../features/catalog/catalogReducer';


export const rootReducer = combineReducers({
    catalog: catalogReducer,
    auth: authReducer
})