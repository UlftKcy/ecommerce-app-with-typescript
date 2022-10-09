import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialState, InputName } from "../../types";
import { getProducts ,createProduct} from "../../api/productService";

const initialState:InitialState = {
    products:[],
    loading:false,
    error:null
}

export const fetchProducts = createAsyncThunk("products/get",async()=>{
   const response = await getProducts();
   return response.data
});

export const createProducts = createAsyncThunk("products/create",async(product:InputName)=>{
    const response = await createProduct(product);
    return response.data;
});


const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state:InitialState,action)=>{
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(createProducts.fulfilled, (state:InitialState, action) => {
            state.loading = false;
            state.products.unshift(action.payload);
        });

    }
});

export default productSlice.reducer;