import {createSlice} from "@reduxjs/toolkit"

export const CounterProductSlice = createSlice({
    name: "counter",
    initialState: {
        // data: 0 
        
    },
    reducers: {
        increment: (state) => {
            state.data += 1
        },
        decrement: (state) => {
            state.data -= 1
        },
    }
})

export const {increment, decrement} = CounterProductSlice.actions
export default CounterProductSlice.reducer