import {AppRootStateType} from '../../app/store';

export const selectIsLoggedIn = (state: AppRootStateType) => state.auth.isLoggedIn
export const selectIsRegistered = (state: AppRootStateType) => state.auth.isRegistered
