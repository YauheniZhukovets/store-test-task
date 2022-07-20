import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        isRegistered: false,
        email: null,
        token: null,
        id: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
        },
        removeUser: (state) => {
            state.email = null
            state.token = null
            state.id = null
        },
        setIsLoggedIn: (state, action: PayloadAction<{ value: boolean }>) => {
            state.isLoggedIn = action.payload.value
        }
    },
    extraReducers: (builder) => {
        /* builder
             .addCase(login.fulfilled, ((state) => {
                 state.isLoggedIn = true
             }))
             .addCase(logout.fulfilled, ((state) => {
                 state.isLoggedIn = false
             }))*/
    }
})

export const authReducer = slice.reducer
export const {setUser,removeUser} = slice.actions

// thunks



