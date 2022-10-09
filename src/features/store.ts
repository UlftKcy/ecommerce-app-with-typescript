import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categories/categorySlice";
import productSlice from "./products/productSlice";


const store = configureStore({
    reducer: {
        products: productSlice,
        categories: categorySlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export default store;