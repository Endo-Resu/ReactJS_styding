import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../Slice/TodoSlice";

export const store = configureStore({
    reducer: {
        todo: todoReducer
    },
})