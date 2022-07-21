import {rootReducer} from './reducers';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: rootReducer
})

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;


export type AppDispatch = typeof store.dispatch
export type AppRootStateType = ReturnType<typeof store.getState>