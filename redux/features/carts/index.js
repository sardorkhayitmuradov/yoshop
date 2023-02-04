import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    licences: [
            
    ],
    products: [
           
    ]
}

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addLicences(state, action) {
            const newItemId = action.payload.id;
            const existingItem = state.licences.find(item => item.id === newItemId);

            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.all_price = action.payload.all_price
            } else {
                state.licences.push(action.payload);
            }
        }, 
        removeLicences(state, action) {
            const newItemId = action.payload;
            const existingItem = state.licences.find(item => item.id === newItemId.id);

            if (existingItem) {
                existingItem.quantity -= 1;
                existingItem.all_price -= newItemId.price
            }
        },
        addProducts(state, action) {
            const newItemId = action.payload.id;
            const existingItem = state.products.find(item => item.id === newItemId);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.licences.push(action.payload);
            }
        }, 
        removeProducts(state, action) {
            state.products = state.products.filter(item => item.id !== action.payload);
        },
    }
});

export const { addLicences, addProducts , removeLicences , removeProducts } = CartSlice.actions;
export default CartSlice.reducer;