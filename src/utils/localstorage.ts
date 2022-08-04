import { AppRootStateType } from 'store/store';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('app-state');

    if (serializedState) {
      return JSON.parse(serializedState);
    }
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: AppRootStateType) => {
  try {
    const serializedState = JSON.stringify(state);

    localStorage.setItem('app-state', serializedState);
  } catch (err) {
    return undefined;
  }
};
