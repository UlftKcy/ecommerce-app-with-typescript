import { configureStore } from "@reduxjs/toolkit";
import { Products } from "../types";
import productSlice from "./products/productSlice";


export interface RootState {
    products: Products
  }
  
  // TS infers type: (state: RootState) => boolean
  const selectIsOn = (state: RootState) => state.products


export default configureStore({
    reducer:{
        products:productSlice,
    },
})