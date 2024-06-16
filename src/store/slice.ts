import { createSlice } from '@reduxjs/toolkit'
import { getItem, setItem } from './localstorage'

interface SubscriptionState {
    isSubscribed: null | boolean
}

const initialState: SubscriptionState = getItem('isSubscribed') || null

export const subcriptionSlice = createSlice({
    name: 'NewLetterSubscription',
    initialState: initialState,
    reducers: {
        confirmSubscribtion: (state, action) => {
            setItem('isSubscribed', action.payload)
        },
        dismissSubscription: (state, action) => {
            setItem('isSubscribed', action.payload)
        }
    }
})


export const { confirmSubscribtion, dismissSubscription } = subcriptionSlice.actions

export default subcriptionSlice.reducer