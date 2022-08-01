import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from 'store/rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});

// @ts-ignore
window.store = store;

export type AppDispatch = typeof store.dispatch;
export type AppRootStateType = ReturnType<typeof store.getState>;
