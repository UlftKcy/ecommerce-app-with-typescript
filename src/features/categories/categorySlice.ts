import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getCategories} from "../../api/categoryService";
import { Categories } from "../../types";


const initialState:Categories = {
    categories:[],
}

export const getCategory = createAsyncThunk("categories/get",async()=>{
    const response = await getCategories();
    return response.categories;
});
const categorySlice = createSlice({
    name:"categories",
    initialState,
    reducers:{},
    extraReducers : (builder)=>{
        builder.addCase(getCategory.fulfilled,(state,action)=>{
            state.categories = action.payload;
        });
    }
});

export default categorySlice.reducer;