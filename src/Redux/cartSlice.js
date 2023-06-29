import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

    }
})

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;