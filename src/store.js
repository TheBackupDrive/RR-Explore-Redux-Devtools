import { configureStore } from '@reduxjs/toolkit'
import grocery from './features/grocerySlice'
import counter from './features/counterSlice'
import todos from './features/todoSlice'

export const store = configureStore({
    reducer: {
        counter,
        grocery,
        todos
    }
})