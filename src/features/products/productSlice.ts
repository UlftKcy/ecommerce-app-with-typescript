import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialState, InputName } from "../../types";
import { getProducts , createNewProduct} from "../../api/productService";

const initialState:InitialState = {
    products:[],
    loading:false,
    error:null
}

export const fetchProducts = createAsyncThunk("products/get",async()=>{
   const response = await getProducts();
   return response.products;
});

export const createProduct = createAsyncThunk("products/create",async(product:InputName)=>{
    const response = await createNewProduct(product);
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
        builder.addCase(createProduct.fulfilled, (state:InitialState, action) => {
            state.loading = false;
            state.products.unshift(action.payload);
        });

    }
});

export default productSlice.reducer;