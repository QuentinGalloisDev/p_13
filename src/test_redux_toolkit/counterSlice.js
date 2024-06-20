import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    token: "",
    firstName: "",
    lastName: "",
}
// const initialToken = {
//     value: '',
// }
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // créer 2 fonctions , une pour stocker le token dans la variable token et une pour rendre une string vide lorsque non connecté.
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        decrementByAmount: (state, action) => {
            state.value -= action.payload
        },
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
export const { increment, decrement, incrementByAmount, decrementByAmount, setToken, clearToken, setUserFirstName, setUserLastName } = counterSlice.actions
// export const { logIn, logOut } = tokenSlice.actions

export default counterSlice.reducer