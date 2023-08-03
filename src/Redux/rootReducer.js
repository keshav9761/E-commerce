import { combineReducers } from "@reduxjs/toolkit";

import productReducer from "../Pages/Products/Redux/productSlice";
import cartReducer from "../Pages/Cart/Redux/cartSlice";
import loginReducer from "./loginSlice";

export const reducers = combineReducers({
    product: productReducer, 
    cart: cartReducer,
    auth: loginReducer 
})

