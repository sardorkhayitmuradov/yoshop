import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    licences: {
        monthly: [
            {
                id: 1,
                name: "Yoshop Retail for Yoshop POS",
                quantity: 0,
                monthly_price: 4500,
                discount: 0
            },
            {
                id: 2,
                name: "Yoshop retail for mobile",
                quantity: 0,
                price: 4500,
                discount: 0
            },
            {
                id: 3,
                name: "Yoshop retail for Android POS",
                quantity: 0,
                price: 4500,
                discount: 0
            }
        ],
        semi_annual: [
            {
                id: 1,
                name: "Yoshop Retail for Yoshop POS",
                quantity: 0,
                monthly_price: 4500,
                discount: 0
            },
            {
                id: 2,
                name: "Yoshop retail for mobile",
                quantity: 0,
                price: 4500,
                discount: 0
            },
            {
                id: 3,
                name: "Yoshop retail for Android POS",
                quantity: 0,
                price: 4500,
                discount: 0
            }
        ],
        annual: [
            {
                id: 1,
                name: "Yoshop Retail for Yoshop POS",
                quantity: 0,
                monthly_price: 4500,
                discount: 0
            },
            {
                id: 2,
                name: "Yoshop retail for mobile",
                quantity: 0,
                price: 4500,
                discount: 0
            },
            {
                id: 3,
                name: "Yoshop retail for Android POS",
                quantity: 0,
                price: 4500,
                discount: 0
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
                }
                return licence;
            });
        },
        decrementQuantityByMonthly(state, action) {
            state.licences.monthly = state.licences.monthly.map(licence => {
                if (licence.id === action.payload) {
                    licence.quantity -= 1;
                }
                return licence;
            }).filter(licence => licence.quantity !== 0);
        },
        incrementQuantityBySemiannual(state, action) {
            state.licences.semi_annual = state.licences.semi_annual.map(licence => {
                if (licence.id === action.payload) {
                    licence.quantity += 1;
                }
                return licence;
            });
        },
        decrementQuantityBySemiannual(state, action) {
            state.licences.semi_annual = state.licences.semi_annual.map(licence => {
                if (licence.id === action.payload) {
                    licence.quantity -= 1;
                }
                return licence;
            }).filter(licence => licence.quantity !== 0);
        },
        incrementQuantityByAnnual(state, action) {
            state.licences.annual = state.licences.annual.map(licence => {
                if (licence.id === action.payload) {
                    licence.quantity += 1;
                }
                return licence;
            });
        },
        decrementQuantityByAnnual(state, action) {
            state.licences.annual = state.licences.annual.map(licence => {
                if (licence.id === action.payload) {
                    licence.quantity -= 1;
                }
                return licence;
            }).filter(licence => licence.quantity !== 0);
        }      
    }

})

export const { incrementQuantityByMonthly, decrementQuantityByMonthly , incrementQuantityBySemiannual , decrementQuantityBySemiannual , incrementQuantityByAnnual , decrementQuantityByAnnual } = LicencesSlice.actions;
export default LicencesSlice.reducer;