import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./redux/reducers/productsReducer";
import { cartReducer } from "./redux/reducers/cartReducer";
export const store = configureStore({
       
       reducer : {
        productsReducer,
        cartReducer,
       }
})
