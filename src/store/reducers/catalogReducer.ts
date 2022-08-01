import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { getDatabase, onValue, ref } from 'firebase/database';

export const slice = createSlice({
  name: 'catalog',
  initialState: {
    products: [] as Array<ProductType>,
  },
  reducers: {
    setCatalog: (state, action) => {
      state.products = action.payload;
    },
  },
  /*  extraReducers: builder => {
    builder.addCase(fetchCatalog.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  }, */
});

export const catalogReducer = slice.reducer;
export const { setCatalog } = slice.actions;

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

type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
};
