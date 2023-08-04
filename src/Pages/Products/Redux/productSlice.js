import {createSlice, } from "@reduxjs/toolkit";
import servies from '../Services/servies'


const initialState = {
    data: [], 
    status: null
};
const { productsFetch } = servies

const productSlice = createSlice({
    name: "product",
    initialState,
    // reducers: {
    //     // addProductList: (state, action) => {
    //     //     state.products = action?.payload
    //     // }
    // },
    
    // extraReducers: {
    //     [productsFetch.pending]: (state, action) => {
    //         state.status = "pending";
    //     },
    //     [productsFetch.fulfilled]: (state, action) => {
    //         console.log("Action>>>", action)
    //         state.data = action.payload;
    //         state.status = "success";

    //     },
    //     [productsFetch.rejected]: (state, action) => {
    //         state.status = "rejected";
    //     },
    // },
    extraReducers: (builder) => {
        builder
          .addCase(productsFetch.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(productsFetch.fulfilled, (state, action) => {
            state.data = action.payload;
            console.log("first###")
            state.loading = false;
          })
          .addCase(productsFetch.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },
})

export const productAction = productSlice.actions;
export default productSlice.reducer;