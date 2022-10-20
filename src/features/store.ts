import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categories/categorySlice";
import productSlice from "./products/productSlice";
import storage from "redux-persist/lib/storage";
import { 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";



const persistConfig = {
    key: "root",
    version: 1,
    storage
}
const reducer = combineReducers({
    products: productSlice,
    categories: categorySlice,
});

const persistedReducer = persistReducer(persistConfig,reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export default store;