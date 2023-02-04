import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  licences: [],
  products: [],
  totalPrice: 0,
  quantity: 0,
};

console.log(initialState.products);

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addLicences(state, action) {
      const { id, period, price, name } = action.payload;
      const existingLicenceIndex = state.licences.findIndex(
        (licence) => licence.id === id
      );

      const licence =
        existingLicenceIndex !== -1
          ? state.licences[existingLicenceIndex]
          : null;

      if (licence) {
        licence.qty += 1;
        licence.price += price;
        state.totalPrice += price;
        state.quantity += 1;
      } else {
        state.licences.push({
          id: id,
          period: period,
          qty: 1,
          name: name,
          price: price,
        });
        state.totalPrice += price;
        state.quantity += 1;
      }
    },
    removeLicences(state, action) {
      const { id, price } = action.payload;
      const existingLicenceIndex = state.licences.findIndex(
        (licence) => licence.id === id
      );

      const licence =
        existingLicenceIndex !== -1
          ? state.licences[existingLicenceIndex]
          : null;

      if (licence?.qty > 1) {
        licence.qty -= 1;
        licence.price -= price;
        state.totalPrice -= licence.price;
        state.quantity -= 1;
      } else {
        state.licences.splice(existingLicenceIndex, 1);
        state.quantity -= 1;
        state.totalPrice -= price;
      }
    },

    addProducts(state, action) {
        const { id, price, title, image } = action.payload;
        const existingLicenceIndex = state.products.findIndex(
          (product) => product.id === id
        );
  
        const product =
          existingLicenceIndex !== -1
            ? state.products[existingLicenceIndex]
            : null;
  
        if (product) {
          product.qty += 1;
          product.price += price;
          state.totalPrice += price;
          state.quantity += 1;
        } else {
          state.products.push({
            id: id,
            qty: 1,
            name: title,
            price: price,
            image: image
          });
          state.totalPrice += price;
          state.quantity += 1;
        }
      },
    removeProducts(state, action) {
        console.log(state.products)
        const { id, price } = action.payload;
        const existingLicenceIndex = state.products.findIndex(
          (product) => product.id === id
        );
  
        const product =
          existingLicenceIndex !== -1
            ? state.products[existingLicenceIndex]
            : null;
  
        if (product?.qty > 1) {
          product.qty -= 1;
          product.price -= price;
          state.totalPrice -= product.price;
          state.quantity -= 1;
        } else {
          state.products.splice(existingLicenceIndex, 1);
          state.quantity -= 1;
          state.totalPrice -= price;
        }
    },
  },
});

export const { addLicences, addProducts, removeLicences, removeProducts } =
  CartSlice.actions;
export default CartSlice.reducer;
