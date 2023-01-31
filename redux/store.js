import {configureStore} from '@reduxjs/toolkit';
import productCounter from './ProductCounterSlice';

export const store = configureStore({
    reducer: {
        productCounter,
    },
})