import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { getDatabase, onValue, ref } from 'firebase/database';

import { AppRootStateType } from 'store/store';

export const slice = createSlice({
  name: 'catalog',
  initialState: {
    products: [] as Array<ProductType>,
    order: [] as Array<OrderType>,
  },
  reducers: {
    setCatalog: (state, action) => {
      state.products = action.payload;
    },
    addItemInOder: (state, action: PayloadAction<OrderType>) => {
      const index = state.order.findIndex(el => el.id === action.payload.id);

      if (index > -1) {
        state.order[index].count += 1;
      } else {
        state.order.unshift(action.payload);
      }
    },
    decrementItemInOder: (state, action: PayloadAction<OrderType>) => {
      const index = state.order.findIndex(el => el.id === action.payload.id);

      if (index > -1) {
        state.order[index].count -= 1;
      }
    },
    deleteItemInOder: (state, action) => {
      const index = state.order.findIndex(el => el.id === action.payload.id);

      if (index > -1) {
        state.order.splice(index, 1);
      }
    },
  },
});

export const catalogReducer = slice.reducer;
export const { setCatalog, addItemInOder, decrementItemInOder, deleteItemInOder } =
  slice.actions;

// thunks
export const fetchCatalog = createAsyncThunk(
  'catalog/fetchCatalog',
  async (arg, thunkAPI) => {
    const db = getDatabase();
    const catalogRef = ref(db, 'catalog');

    try {
      await onValue(catalogRef, snapshot => {
        const res = snapshot.val();

        thunkAPI.dispatch(setCatalog(res));
      });
    } catch (err) {
      const error = err as AxiosError;

      console.log(error);
    }
  },
);

export const sendOrderData = createAsyncThunk<
  unknown,
  DataUserType,
  { state: AppRootStateType }
>('catalog/sendOrderData', async (values, thunkAPI) => {
  const { order } = thunkAPI.getState().catalog;
  const sumOrder = order.reduce((acc, el) => acc + el.price, 0);
  const payloadJson = JSON.stringify({ userValues: values, order, sumOrder });

  console.log(payloadJson);
});

export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export type OrderType = ProductType & {
  count: number;
};

type DataUserType = {
  name: string;
  surname: string;
  address: string;
  phone: string;
};
