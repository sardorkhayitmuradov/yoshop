import { createSlice } from "@reduxjs/toolkit";
import { equipments } from "../../../constants/equipments";

const initialState = {
    products: equipments.map((product) => {
        return {
            ...product,
            discount: 0
        }
    })
};

export const ProductsSlice = createSlice({
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

export const { incrementQuantity, decrementQuantity } = ProductsSlice.actions;
export default ProductsSlice.reducer;