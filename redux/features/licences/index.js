import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  annual: [
    {  
      id: 21,
      name: "Yoshop Retail for Yoshop POS",
      nameru: "Yoshop Retail для Yoshop POS",
      price: 45000,
      discounts: [
        {
          from: 2,
          price: 35000,
        },
        {
          from: 3,
          price: 40000,
        },
      ],
      product: [
        {
          id: 99,
          image: "/assets/images/centrem.png",
          name: "YoShop POS",
          price: 160000,
        },
      ],
      products: [],
    },
    {
      id: 22,
      name: "Yoshop retail for mobile",
      nameru: "Yoshop retail для мобильных устройств",
      price: 30000,
      discounts: [
        {
          from: 2,
          price: 15000,
        },
        {
          from: 3,
          price: 35000,
        },
      ],
    },
    {
      id: 23,
      name: "Yoshop retail for Android POS",
      nameru: "Yoshop retail для Android POS",
      price: 30000,
      discount: 1000,
    },
  ],
  semiAnnual: [
    {
      id: 24,
      name: "Yoshop Retail for Yoshop POS",
      nameru: "Yoshop Retail для Yoshop POS",
      price: 25000,
      discounts: [
        {
          from: 2,
          price: 20000,
        },
      ],
      product: [
        {
          id: 99,
          image: "/assets/images/centrem.png",
          name: "YoShop POS",
          price: 160000,
        },
      ],
      products: [],
    },
    {
      id: 25,
      name: "Yoshop retail for mobile",
      nameru: "Yoshop retail для мобильных устройств",
      price: 20000,
      discounts: [
        {
          from: 2,
          price: 10000,
        },
        {
          from: 3,
          price: 15000,
        },
      ],
    },
    {
      id: 26,
      name: "Yoshop retail for Android POS",
      nameru: "Yoshop retail для Android POS",
      price: 20000,
      discount: 5000,
    },
  ],
  monthly: [
    {
      id: 27,
      name: "Yoshop Retail for Yoshop POS",
      nameru: "Yoshop Retail для Yoshop POS",
      price: 4500,
      discounts: [
        {
          from: 2,
          price: 3500,
        },
        {
          from: 3,
          price: 4000,
        },
      ],
      product: [  
        {
          id: 99,
          image: "/assets/images/centrem.png",
          name: "YoShop POS",
          price: 160000,
        },
      ],
      products: [],
    },
    {
      id: 28,
      name: "Yoshop retail for mobile",
      nameru: "Yoshop retail для мобильных устройств",
      price: 4500,
      discounts: [
        {
          from: 2,
          price: 2500,
        },
        {
          from: 3,
          price: 4000,
        },
      ],
    },
    {
      id: 29,
      name: "Yoshop retail for Android POS",
      nameru: "Yoshop retail для Android POS",
      price: 4500,
      discount: 1000,
    },
  ],
};

export const LicencesSlice = createSlice({
  name: "licences",
  initialState,
  reducers: {
  },
});

export default LicencesSlice.reducer;
