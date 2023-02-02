import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pos_name: "Yoshop Retail for Yoshop POS",
    mobile_name: "Yoshop retail for mobile",
    android_name: "Yoshop retail for Android POS",
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
        semi_aunnual: [
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
        aunnual: [
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
        incrementQuantity(state, action) {
            state.licences = state.licences.map(licence => {
                if (licence.id === action.payload) {
                    licence.quantity += 1;
                }
                return licence;
            });
        },
        decrementQuantity(state, action) {
            state.licences = state.licences.map(licence => {
                if (licence.id === action.payload) {
                    licence.quantity -= 1;
                }
                return licence;
            }).filter(licence => licence.quantity !== 0);
        }  
    }

})

export const { incrementQuantity, decrementQuantity } = LicencesSlice.actions;
export default LicencesSlice.reducer;