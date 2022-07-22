import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {getDatabase, onValue, ref} from 'firebase/database';


type InitialStteType = {
    products:Array<ProductType> | null
}
const initialState:InitialStteType = {
    products: []
}

export const slice = createSlice({
    name: 'catalog',
    initialState:initialState,
    reducers: {
        setCatalog: (state, action) => {
            state = action.payload
            console.log(state,"state")
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCatalog.fulfilled, (state, action) => {
            state.products = action.payload
        })
    },
})

export const catalogReducer = slice.reducer
export const {setCatalog} = slice.actions

// thunks
export const fetchCatalog = createAsyncThunk('catalog/fetchCatalog', async (param, thunkAPI) => {
    const db = getDatabase();
    const catalogRef = ref(db, 'catalog');
    let result = null;
    try {
        await onValue(catalogRef, (snapshot) => {
            result = snapshot.val();
        });

    } catch (err) {
        const error = err as AxiosError
        console.error(error)
    }
    return result
})

type ProductType = {
    id: number
    name: string
    description: string
    price: number
}




