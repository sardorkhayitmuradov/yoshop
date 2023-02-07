import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  annual:[
    {
      id: 7,
      name: "Yoshop Retail for Yoshop POS",
      price: 45000,
      discount: 0,
      products: [
        {
          id: 10,
          image: "/assets/images/centrem.png",
          name: 'YoShop POS',
          price: 160000
        }
      ]
    },
    {
      id: 8,
      name: "Yoshop retail for mobile",
      price: 30000,
      discount: 0,
    },
    {
      id: 9,
      name: "Yoshop retail for Android POS",
      price: 30000,
      discount: 0,
    },
  ],
  semiAnnual: [
    {
      id: 4,
      name: "Yoshop Retail for Yoshop POS",
      price: 25000,
      discount: 0,
      products: [
        {
          id: 10,
          image: "/assets/images/centrem.png",
          name: 'YoShop POS',
          price: 160000
        }
      ]
    },
    {
      id: 5,
      name: "Yoshop retail for mobile",
      price: 20000,
      discount: 0,

    },
    {
      id: 6,
      name: "Yoshop retail for Android POS",
      price: 20000,
      discount: 0,
    },
  ],
  monthly: [
    {
      id: 1,
      name: "Yoshop Retail for Yoshop POS",
      price: 4500,
      discount: 0,
      hardwares: [
        {
          id: 10,
          image: "/assets/images/centrem.png",
          name: 'YoShop POS',
          price: 160000
        }
      ],
      products: []
    },
    {
      id: 2,
      name: "Yoshop retail for mobile",
      price: 4500,
      discount: 0,
    },
    {
      id: 3,
      name: "Yoshop retail for Android POS",
      price: 4500,
      discount: 0,
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
