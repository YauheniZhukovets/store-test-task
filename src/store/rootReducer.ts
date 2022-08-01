import { combineReducers } from '@reduxjs/toolkit';

import { authReducer } from 'store/reducers/authReducer';
import { catalogReducer } from 'store/reducers/catalogReducer';

export const rootReducer = combineReducers({
  catalog: catalogReducer,
  auth: authReducer,
});
