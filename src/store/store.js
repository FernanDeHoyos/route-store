import { configureStore } from "@reduxjs/toolkit";
import { shopSlice } from "./products/shopSlice";
shopSlice

export const store = configureStore({
    reducer: {
        shop: shopSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})