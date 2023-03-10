import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: {
    licenses: [],
    products: [],
    totalPrice: 0,
    quantity: 0,
  },
  licenses: [],
  products: [],
  totalPrice: 0,
  quantity: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.licenses = [...state.licenses];
      state.cart.products = [...state.products];
      state.cart.quantity = state.quantity
    },

    addUsers(state, action) {
      const { elId, price } = action.payload;
      const existingLicenseIndex = state.licenses.findIndex(
        (licence) => licence.id === elId
      );

      const license = state.licenses[existingLicenseIndex];

      license.cashier.qty += 1;
      license.cashier.price += price
      state.quantity += 1
      license.subTotal += price;
      state.totalPrice += price
    },

    removeUsers(state, action) {
      const { elId, price } = action.payload;
      const existingLicenseIndex = state.licenses.findIndex(
        (licence) => licence.id === elId
      );

      const license = state.licenses[existingLicenseIndex];

      if (license.cashier.qty > license.qty * 2) {
        license.cashier.qty -= 1;
        state.quantity -= 1;
        license.cashier.price -= price
        state.totalPrice -= price;
        license.subTotal -= price;
      }
    },

    removeEquipments(state, action) {
      const { elId, product } = action.payload;
      const existingLicenseIndex = state.licenses.findIndex(
        (licence) => licence.id === elId
      );
      if (existingLicenseIndex === -1) {
        return;
      }

      const licence = state.licenses[existingLicenseIndex];
      const existingProductIndex = licence.products.findIndex(
        (p) => p.id === product.id
      );

      if (existingProductIndex === -1) {
        return;
      }

      licence.products[existingProductIndex].qty -= 1;
      licence.products[existingProductIndex].price -= product.price;

      if (licence.products[existingProductIndex].qty === 0) {
        licence.products.splice(existingProductIndex, 1);
      }
      state.totalPrice -= product.price;
      licence.subTotal -= product.price;
      state.quantity -= 1;
    },

    addEquipments(state, action) {
      const { elId, product } = action.payload;
      const existingLicenseIndex = state.licenses.findIndex(
        (licence) => licence.id === elId
      );

      if (existingLicenseIndex === -1) {
        return;
      }

      const licence = state.licenses[existingLicenseIndex];
      const existingProductIndex = licence.products.findIndex(
        (p) => p.id === product.id
      );

      if (existingProductIndex === -1) {
        licence.products.push({ ...product, qty: 1 });
      } else {
        licence.products[existingProductIndex].qty += 1;
        licence.products[existingProductIndex].price += product.price;
      }
      licence.subTotal += product.price;
      state.totalPrice += product.price;
      state.quantity += 1;
    },

    addLicences(state, action) {
      let {
        el: { id, price, name, discounts , product },
        period,
      } = action.payload;

      const existingLicenseIndex = state.licenses.findIndex(
        (licence) => licence.id === id
      );

      const licence =
        existingLicenseIndex !== -1
          ? state.licenses[existingLicenseIndex]
          : null;

      if (licence) {
        licence.cashier.qty += product ? 2 : 1 ;
        licence.qty += 1;
        discounts.forEach((dsc) => {
          if (dsc.from <= licence.qty) {
            price = dsc.price;
          }
        });
        licence.price += price;
        licence.subTotal += price;
        state.totalPrice += price;
        state.quantity += 1;
      } else {
        state.licenses.push({
          id: id,
          period: period,
          qty: 1,
          name: name,
          price: price,
          products: [],
          cashier: {
            price: 0,
            qty: product ? 2 : 1,
          },
          subTotal: price,
        });
        state.totalPrice += price;
        state.quantity += 1;
      }
    },

    removeLicences(state, action) {
      let { id, price, discounts , product } = action.payload;

      const existingLicenseIndex = state.licenses.findIndex(
        (licence) => licence.id === id
      );

      if (existingLicenseIndex === -1) {
        return;
      }

      const licence = state.licenses[existingLicenseIndex];
      discounts.forEach((dsc) => {
        if (dsc.from <= licence.qty) {
          price = dsc.price;
        }
      });
      licence.qty -= 1;
      licence.price -= price;
      licence.subTotal -= price;
      state.totalPrice -= price;
      state.quantity -= 1;
      licence.cashier.qty -= product ? 2 : 1;

      if (licence.qty === 0) {
        state.licenses.splice(existingLicenseIndex, 1);
      }
    },

    addProducts(state, action) {
      const { id, price, title, image } = action.payload;
      const existingLicenseIndex = state.products.findIndex(
        (product) => product.id === id
      );

      const product =
        existingLicenseIndex !== -1
          ? state.products[existingLicenseIndex]
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
          image: image,
        });
        state.totalPrice += price;
        state.quantity += 1;
      }
    },
    removeProducts(state, action) {
      const { id, price } = action.payload;
      const existingLicenseIndex = state.products.findIndex(
        (product) => product.id === id
      );

      const product =
        existingLicenseIndex !== -1
          ? state.products[existingLicenseIndex]
          : null;

      if (product?.qty > 1) {
        product.qty -= 1;
        product.price -= price;
        state.totalPrice -= price;
        if(price){
          state.quantity -= 1;
        }
      } else {
        state.products.splice(existingLicenseIndex, 1);
        if(price){
          state.quantity -= 1;
          state.totalPrice -= price;
        }
      }
    },
  },
});

export const {
  addLicences,
  addProducts,
  addEquipments,
  addUsers,
  removeLicences,
  removeProducts,
  removeEquipments,
  removeUsers,
  addToCart,
} = CartSlice.actions;
export default CartSlice.reducer;
