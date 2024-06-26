import { configureStore } from '@reduxjs/toolkit'
import subcriptionSlice from './slice'

interface Reducer {
    subscription: any
}

export const store = configureStore({
    reducer: {
        subscription: subcriptionSlice
    },


})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch