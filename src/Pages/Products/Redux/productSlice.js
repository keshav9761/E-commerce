import { createSlice, } from "@reduxjs/toolkit";
import servies from '../Services/servies'

const initialState = {
    data: {},
    status: null
};
const { productsFetch } = servies

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        // addProductList: (state, action) => {
        //     state.products = action?.payload
        // }
    },
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = "pending";
        },
        [productsFetch.fulfilled]: (state, action) => {
            console.log("Actionaaa", action)
            state.data = action.payload;
            state.status = "success";

        },
        [productsFetch.rejected]: (state, action) => {
            state.status = "rejected";
        },
    }
})

export const productAction = productSlice.actions;
export default productSlice.reducer;