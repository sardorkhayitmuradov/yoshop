import {configureStore} from '@reduxjs/toolkit';
import productCounter from './features/Products';
import licence from './features/licences';
import carts from './features/carts'

export const store = configureStore({
    reducer: {
        productCounter,
        licence,
        carts
    },
})
