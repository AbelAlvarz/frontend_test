import { createSlice } from '@reduxjs/toolkit'

interface SubscriptionState {
    isSubscribed: null | boolean
}

const initialState: SubscriptionState = {
    isSubscribed: null,
}

export const subcriptionSlice = createSlice({
    name: 'NewLetterSubscription',
    initialState,
    reducers: {
        confirmSubscribtion: (state) => {
            state.isSubscribed = true
        },
        dismissSubscription: (state) => {
            state.isSubscribed = false
        }
    }
})


export const { confirmSubscribtion, dismissSubscription } = subcriptionSlice.actions

export default subcriptionSlice.reducer