import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getCategories, getCategory} from "../../api/categoryService";
import { Categories } from "../../types";


const initialState:Categories = {
    categories:[],
    selected_category : "",
    loading: false,
    error: null
}

export const fetchCategories = createAsyncThunk("categories/get",async()=>{
    const response = await getCategories();
    return response.categories;
});

export const fetchCategory = createAsyncThunk("categories/getItem",async(id:string)=>{
    const response = await getCategory(id);
    return response.category;

});
const categorySlice = createSlice({
    name:"categories",
    initialState,
    reducers:{
        resetFilteredCategory: () => {
            return initialState;
        }
    },
    extraReducers : (builder)=>{
        // fetch categories
        builder.addCase(fetchCategories.pending,(state,action)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchCategories.fulfilled,(state,action)=>{
            state.loading = false;
            state.categories = action.payload;
        });
        builder.addCase(fetchCategories.rejected,(state,action)=>{
            state.loading = false;
            state.error =  "Error fetching categories";
        });

        // fetch category
        builder.addCase(fetchCategory.pending,(state,action)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchCategory.fulfilled,(state,action)=>{
            state.loading = false;
            state.selected_category = action.payload;
        });
        builder.addCase(fetchCategory.rejected,(state,action)=>{
            state.loading = false;
            state.error =  "Error fetching category";
        });
    }
});

export const {resetFilteredCategory} = categorySlice.actions;
export default categorySlice.reducer;