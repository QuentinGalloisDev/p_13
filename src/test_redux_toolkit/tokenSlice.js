import { createSlice } from '@reduxjs/toolkit'

const initialToken = {
    value: null,
}

export const tokenSlice = createSlice({
    name: 'token',
    initialToken,
    reducers: {
        logIn: (token, action) => {
            token.value = action.payload
        },
        logOut: (token) => {
            token.value = null
        },
    }
})

export const { logIn, logOut } = tokenSlice.actions

export default tokenSlice.reducer