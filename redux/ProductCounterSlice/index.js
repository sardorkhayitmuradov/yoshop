import { createSlice } from "@reduxjs/toolkit";
import { equipments } from "../../constants/equipments";

const initialState = equipments.map(products => {
    return(
        {
            id: products.id,
            title: products.title,
            quantity: 0,
            discount: 0
        }
    )

})
console.log(initialState);

export const CounterProductSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            return state.map((value)=>{
                if(action.payload.id = value.id){
                    value.quantity += 1
                }
            })
        },
        increment: (state, action) => {
            return state.map((value)=>{
                if(action.payload.i = value.id){
                    value.quantity -= 1
                }
            })
        },
        // decrement: (state) => {
        //     state.data -= 1
        // },
        
    }
});

export const { increment, decrement } = CounterProductSlice.actions;
export default CounterProductSlice.reducer;