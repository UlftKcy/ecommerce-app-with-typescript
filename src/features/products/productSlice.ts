import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialState, InputName } from "../../types";
import { getProducts , createNewProduct, getProductItem} from "../../api/productService";

const initialState:InitialState = {
    products:[],
    selected_product : {},
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

export const fetchProductItem = createAsyncThunk("products/get",async(id:string)=>{
    const response = await getProductItem(id);
    return response.product;
}) ;


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

        builder.addCase(fetchProductItem.fulfilled, (state:InitialState, action) => {
            state.loading = false;
            state.selected_product = action.payload;
        });

    }
});

export default productSlice.reducer;