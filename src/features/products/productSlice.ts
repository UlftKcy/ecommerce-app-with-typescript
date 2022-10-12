import { createAsyncThunk, createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, InputName } from "../../types";
import { getProducts, createNewProduct, getProductItem } from "../../api/productService";

const initialState: InitialState = {
    products: [],
    selected_product: {},
    favorite_products : [],
    loading: false,
    error: null
}

export const fetchProducts = createAsyncThunk("products/get", async () => {
    const response = await getProducts();
    return response.products;
});

export const createProduct = createAsyncThunk("products/create", async (product: InputName) => {
    const response = await createNewProduct(product);
    return response.data;
});

export const fetchProductItem = createAsyncThunk("products/getItem", async (id: string) => {
    const response = await getProductItem(id);
    return response.product;
});


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        resetSelectedProduct: () => {
            return initialState;
        },

        deleteProduct(state,{payload}){
            const currentStateProducts = current(state).products;
            state.products = currentStateProducts.filter(product=>product._id !== payload._id)
        },
        addToFavorites(state,{payload}){
            state.favorite_products.push(payload)
        },
        removeFavorites(state,{payload}){
            const currentStateFavorites = current(state).favorite_products;
            state.favorite_products = currentStateFavorites.filter(favorite_product=>favorite_product._id !== payload._id)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state: InitialState, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(createProduct.fulfilled, (state: InitialState, action) => {
            state.loading = false;
            state.products.unshift(action.payload);
        });

        builder.addCase(fetchProductItem.fulfilled, (state: InitialState, action) => {
            state.loading = false;
            state.selected_product = action.payload;
        });

    }
});
export const { resetSelectedProduct,deleteProduct,addToFavorites,removeFavorites } = productSlice.actions;
export default productSlice.reducer;