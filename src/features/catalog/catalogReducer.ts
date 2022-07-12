import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'todolists',
    initialState: [] as any,
    reducers: {
        changeTodolistFilterAC: (state, action: PayloadAction<{ id: string }>) => {
            //const index = state.findIndex(tl => tl.id === action.payload.id)
           /* if (index > -1) {
                state[index].filter = action.payload.filter
            }*/
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodolistsTC.fulfilled, (state, action) => {
            //return action.payload.todolists.map(tl => ({...tl, filter: 'all', entityStatus: 'idle'}))
        })
    }
})

export const catalogReducer = slice.reducer
export const {changeTodolistFilterAC} = slice.actions

// thunks
const fetchTodolistsTC = createAsyncThunk<any, undefined, any>('todolists/fetchTodolists', async (arg, thunkAPI) => {
    //const res = await todolistsAPI.getTodolists()
    try {
       // thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
        //return {todolists: res.data}
    } catch (err) {
        //const error = err as AxiosError
        //return handleAsyncServerNetworkError(error, thunkAPI);
    }
})


export const asyncActions = {
    fetchTodolistsTC,
}

