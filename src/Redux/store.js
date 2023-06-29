import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './loginSlice'
import cartReducer from './cartSlice'
import productReducer from './productSlice'
export const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
    product: productReducer
  },
})