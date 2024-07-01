import { configureStore } from '@reduxjs/toolkit'
import dataUserReducer from './dataUserSlice'

export const store = configureStore({
    reducer: {
        dataUser: dataUserReducer,
    },
})