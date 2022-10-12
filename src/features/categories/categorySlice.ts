import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getCategories, getCategory} from "../../api/categoryService";
import { Categories } from "../../types";


const initialState:Categories = {
    categories:[],
    selected_category : ""
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
        builder.addCase(fetchCategories.fulfilled,(state,action)=>{
            state.categories = action.payload;
        });
        builder.addCase(fetchCategory.fulfilled,(state,action)=>{
            state.selected_category = action.payload;
        });
    }
});

export const {resetFilteredCategory} = categorySlice.actions;
export default categorySlice.reducer;