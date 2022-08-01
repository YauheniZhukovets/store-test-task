import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const slice = createSlice({
  name: 'auth',
  initialState: {
    email: null,
    token: null,
    id: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser: state => {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const authReducer = slice.reducer;
export const { setUser, removeUser } = slice.actions;

// thunks
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (param: FormValuesType, thunkAPI) => {
    const auth = getAuth();
    const res = await createUserWithEmailAndPassword(auth, param.email, param.password);

    try {
      thunkAPI.dispatch(
        setUser({
          email: res.user.email,
          id: res.user.uid,
          token: res.user.refreshToken,
        }),
      );
    } catch (err) {
      const error = err as AxiosError;

      console.error(error);
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (param: FormValuesType, thunkAPI) => {
    const auth = getAuth();
    const res = await signInWithEmailAndPassword(auth, param.email, param.password);

    try {
      thunkAPI.dispatch(
        setUser({
          email: res.user.email,
          id: res.user.uid,
          token: res.user.refreshToken,
        }),
      );
    } catch (err) {
      const error = err as AxiosError;

      console.error(error);
    }
  },
);

export type FormValuesType = {
  email: string;
  password: string;
};
