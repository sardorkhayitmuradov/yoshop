import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    licences: {
        monthly: [
            {
                id: 1,
                name: "Yoshop Retail for Yoshop POS",
                quantity: 0,
                price: 4500,
                all_price: 0,
                discount: 0,
                monthly: "Monthly"
            },
            {
                id: 2,
                name: "Yoshop retail for mobile",
                quantity: 0,
                price: 4500,
                all_price: 0,
                discount: 0,
                monthly: "Monthly"
            },
            {
                id: 3,
                name: "Yoshop retail for Android POS",
                quantity: 0,
                price: 0,
                all_price: 0,
                discount: 0,
                monthly: "Monthly"
            }
        ],
        semi_annual: [
            {
                id: 4,
                name: "Yoshop Retail for Yoshop POS",
                quantity: 0,
                price: 25000,
                all_price: 0,
                discount: 0,
                monthly: "Semi-annual"
            },
            {
                id: 5,
                name: "Yoshop retail for mobile",
                quantity: 0,
                price: 20000,
                all_price: 0,
                discount: 0,
                monthly: "Semi-annual"
            },
            {
                id: 6,
                name: "Yoshop retail for Android POS",
                quantity: 0,
                price: 0,
                all_price: 0,
                discount: 0,
                monthly: "Semi-annual"
            }
        ],
        annual: [
            {
                id: 7,
                name: "Yoshop Retail for Yoshop POS",
                quantity: 0,
                price: 45000,
                all_price: 0,
                discount: 0,
                monthly: "Annual"
            },
            {
                id: 8,
                name: "Yoshop retail for mobile",
                quantity: 0,
                price: 30000,
                all_price: 0,
                discount: 0,
                monthly: "Annual"
            },
            {
                id: 9,
                name: "Yoshop retail for Android POS",
                quantity: 0,
                price: 0,
                all_price: 0,
                discount: 0,
                monthly: "Annual"
            }
        ],
    }
}

export const LicencesSlice = createSlice({
    name: "licences",
    initialState,
    reducers: {
        incrementQuantityByMonthly(state, action) {
            state.licences.monthly = state.licences.monthly.map(licence => {
                if (licence.id === action.payload) {
                    licence.quantity += 1;
                    licence.all_price = licence.quantity * licence.price;
                }
                return licence;
            });
        },
        decrementQuantityByMonthly(state, action) {
            state.licences.monthly = state.licences.monthly.map(licence => {
                if (licence.id === action.payload) {
                    licence.quantity -= 1;
                    licence.all_price = licence.all_price - licence.price;
                    if(licence.quantity <= 0){
                        licence.quantity = 0;
                        licence.price = 0;
                    }
                }
                return licence;
            });
        },
        incrementQuantityBySemiannual(state, action) {
            state.licences.semi_annual = state.licences.semi_annual.map(licence => {
                if (licence.id === action.payload) {
                    licence.quantity += 1;
                    licence.all_price = licence.quantity * licence.price;
                }
                return licence;
            });
        },
        decrementQuantityBySemiannual(state, action) {
            state.licences.semi_annual = state.licences.semi_annual.map(licence => {
                if (licence.id === action.payload) {
                    licence.quantity -= 1;
                    licence.all_price = licence.all_price - licence.price;
                    if(licence.quantity <= 0){
                        licence.quantity = 0;
                        licence.price = 0;
                    }
                }
                return licence;
            });
        },
        incrementQuantityByAnnual(state, action) {
            state.licences.annual = state.licences.annual.map(licence => {
                if (licence.id === action.payload) {
                    licence.quantity += 1;
                    licence.all_price = licence.quantity * licence.price;
                }
                return licence;
            });
        },
        decrementQuantityByAnnual(state, action) {
            state.licences.annual = state.licences.annual.map(licence => {
                if (licence.id === action.payload) {
                    licence.quantity -= 1;
                    licence.all_price = licence.all_price - licence.price;
                    if(licence.quantity <= 0){
                        licence.quantity = 0;
                        licence.price = 0;
                    }
                }
                return licence;
            });
        }      
    }

})

export const { incrementQuantityByMonthly, decrementQuantityByMonthly , incrementQuantityBySemiannual , decrementQuantityBySemiannual , incrementQuantityByAnnual , decrementQuantityByAnnual } = LicencesSlice.actions;
export default LicencesSlice.reducer;