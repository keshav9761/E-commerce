import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import cartServices from "../cartServices/cartServices";

const initialState = {
  status: 'idle',
  cartItems: [],
  cartLoaded: false
};

const { cartsFetch } = cartServices;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  // reducers: {
  //   addToCart(state, action) {
  //     const itemIndex = state.cartItems.findIndex(
  //       (item) => item.id === action?.payload?.id
  //     );
  //     if (itemIndex >= 0) {
  //       state.cartItems[itemIndex].cartQuantity += 1;
  //       toast.info(
  //         `increase ${state.cartItems[itemIndex].title} product quantity`,
  //         {
  //           position: "top-right",
  //         }
  //       );
  //     } else {
  //       const tempProduct = { ...action.payload, cartQuantity: 1 };
  //       console.log("ackl",action.payload)
  //       state.cartItems.push(tempProduct);
  //       toast.success(`${action?.payload?.title} added to cart`, {
  //         position: "top-right",
  //       });
  //     }
  //     state.cartItems.push(action.payload);
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(cartsFetch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(cartsFetch.fulfilled, (state, action) => {
        const product = action.payload;
        const existingItem = state.cartItems.find(item => item.id === product.id);

        if (existingItem) {
          existingItem.quantity++;
          toast.warning(`increase quntity ${state.cartItems[existingItem]}`, { position: "buttom-right" })
        }
        else {
          state.cartItems.push({ ...product, quantity: 1 });
          toast.success(`added ${product?.title}`, { position: "top-right" })
        }
        state.status = 'succeeded'
        console.log("cart", action)
      })
      .addCase(cartsFetch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
