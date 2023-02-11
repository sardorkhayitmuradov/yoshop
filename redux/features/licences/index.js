import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  annual: [
    {
      id: 21,
      name: "Yoshop Retail for Yoshop POS",
      price: 45000,
      discount: 1000,
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
      price: 30000,
      discount: 1000,
    },
    {
      id: 23,
      name: "Yoshop retail for Android POS",
      price: 30000,
      discount: 1000,
    },
  ],
  semiAnnual: [
    {
      id: 24,
      name: "Yoshop Retail for Yoshop POS",
      price: 25000,
      discount: 5000,
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
      price: 20000,
      discount: 5000,
    },
    {
      id: 26,
      name: "Yoshop retail for Android POS",
      price: 20000,
      discount: 5000,
    },
  ],
  monthly: [
    {
      id: 27,
      name: "Yoshop Retail for Yoshop POS",
      price: 4500,
      discount: 1000,
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
      price: 4500,
      discount: 1000,
    },
    {
      id: 29,
      name: "Yoshop retail for Android POS",
      price: 4500,
      discount: 1000,
    },
  ],
};

export const LicencesSlice = createSlice({
  name: "licences",
  initialState,
  reducers: {
    // incrementQuantityByMonthly(state, action) {
    //     state.licences.monthly = state.licences.monthly.map(licence => {
    //         if (licence.id === action.payload) {
    //             licence.quantity += 1;
    //             licence.all_price = licence.quantity * licence.price;
    //         }
    //         return licence;
    //     });
    // },
    // decrementQuantityByMonthly(state, action) {
    //     state.licences.monthly = state.licences.monthly.map(licence => {
    //         if (licence.id === action.payload) {
    //             licence.quantity -= 1;
    //             licence.all_price = licence.all_price - licence.price;
    //             if(licence.quantity <= 0){
    //                 licence.quantity = 0;
    //                 licence.price = 0;
    //             }
    //         }
    //         return licence;
    //     });
    // },
    // incrementQuantityBySemiannual(state, action) {
    //     state.licences.semi_annual = state.licences.semi_annual.map(licence => {
    //         if (licence.id === action.payload) {
    //             licence.quantity += 1;
    //             licence.all_price = licence.quantity * licence.price;
    //         }
    //         return licence;
    //     });
    // },
    // decrementQuantityBySemiannual(state, action) {
    //     state.licences.semi_annual = state.licences.semi_annual.map(licence => {
    //         if (licence.id === action.payload) {
    //             licence.quantity -= 1;
    //             licence.all_price = licence.all_price - licence.price;
    //             if(licence.quantity <= 0){
    //                 licence.quantity = 0;
    //                 licence.price = 0;
    //             }
    //         }
    //         return licence;
    //     });
    // },
    // incrementQuantityByAnnual(state, action) {
    //     state.licences.annual = state.licences.annual.map(licence => {
    //         if (licence.id === action.payload) {
    //             licence.quantity += 1;
    //             licence.all_price = licence.quantity * licence.price;
    //         }
    //         return licence;
    //     });
    // },
    // decrementQuantityByAnnual(state, action) {
    //     state.licences.annual = state.licences.annual.map(licence => {
    //         if (licence.id === action.payload) {
    //             licence.quantity -= 1;
    //             licence.all_price = licence.all_price - licence.price;
    //             if(licence.quantity <= 0){
    //                 licence.quantity = 0;
    //                 licence.price = 0;
    //             }
    //         }
    //         return licence;
    //     });
    // }
  },
});

export const {
  incrementQuantityByMonthly,
  decrementQuantityByMonthly,
  incrementQuantityBySemiannual,
  decrementQuantityBySemiannual,
  incrementQuantityByAnnual,
  decrementQuantityByAnnual,
} = LicencesSlice.actions;
export default LicencesSlice.reducer;
