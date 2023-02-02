import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts: [],
}

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            const cart = action.payload;
            state.carts.push(cart);       
        }, 
    }
});

export const { incrementQuantity, decrementQuantity } = CartSlice.actions;
export default CartSlice.reducer;