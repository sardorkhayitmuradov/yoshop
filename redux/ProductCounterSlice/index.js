import { createSlice } from "@reduxjs/toolkit";
import { equipments } from "../../constants/equipments";

const initialState = {
    products: equipments.map((product) => {
        return {
            ...product,
            quantity: 1,
            discount: 0
        }
    })
};

export const CounterProductSlice = createSlice({
    name: "productCounter",
    initialState,
    reducers: {
        incrementQuantity(state, action) {
            state.products = state.products.map(product => {
                if (product.id === action.payload) {
                    product.quantity += 1;
                }
                return product;
            });
        },
        decrementQuantity(state, action) {
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