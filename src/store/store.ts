import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from 'store/rootReducer';
import { loadState, saveState } from 'utils/localstorage';

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState({
    auth: {
      email: store.getState().auth.email,
      id: store.getState().auth.id,
      token: store.getState().auth.token,
    },
    catalog: store.getState().catalog,
  });
});

// @ts-ignore
window.store = store;

export type AppDispatch = typeof store.dispatch;
export type AppRootStateType = ReturnType<typeof store.getState>;
