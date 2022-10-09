import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "../../api/productService";

import { InitialState } from "../../types";

const initialState:InitialState = {
    products:[],
    loading:false,
    error:null
}

export const getProducts = createAsyncThunk("products/get",async()=>{
   const response = await productService.getProducts();
   return response.data;
});

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.loading = false;
            state.products = action.payload;
        });


    }
});

export default productSlice.reducer;