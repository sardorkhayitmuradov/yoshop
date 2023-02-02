import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [],
}

export const CounterProductSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart(state, action) {
            state.products = state.products.map(product => {
                if (product.id === action.payload) {
                    product.quantity += 1;
                }
                return product;
            });
        },
        removeCart(state, action) {
            state.products = state.products.map(product => {
                if (product.id === action.payload) {
                    product.quantity -= 1;
                }
                return product;
            }).filter(product => product.quantity !== 0);
        }    
    }
});

export const { incrementQuantity, decrementQuantity } = CounterProductSlice.actions;
export default CounterProductSlice.reducer;