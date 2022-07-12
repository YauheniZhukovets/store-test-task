import {store} from '../app/store';

export type AppDispatch = typeof store.dispatch
export type AppRootStateType = ReturnType<typeof store.getState>
