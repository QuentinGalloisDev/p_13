import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    token: "",
    firstName: "",
    lastName: "",
}
export const dataUserSlice = createSlice({
    name: 'dataUser',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        clearToken: (state) => {
            state.token = ''
        },
        setUserFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setUserLastName: (state, action) => {
            state.lastName = action.payload
        },
    },
})


// Action creators are generated for each case reducer function
export const { setToken, clearToken, setUserFirstName, setUserLastName } = dataUserSlice.actions
// export const { logIn, logOut } = tokenSlice.actions

export default dataUserSlice.reducer