import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts: {
        licences: [],
        products: []
    },
}

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addLicences(state, action) {
            const cart = action.payload;
            state.carts.licences.push(cart);       
        }, 
        addProducts(state, action) {
            const cart = action.payload;
            state.carts.products.push(cart);       
        }, 
    }
});

export const { addLicences, addProducts } = CartSlice.actions;
export default CartSlice.reducer;