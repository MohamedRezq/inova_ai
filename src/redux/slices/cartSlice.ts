import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BlogType, CartItemType, CartType } from "../../types";

// Define the initial state using that type
const initialState = {
  itemsCount: 0,
  items: [],
} as CartType;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<CartItemType>) => {
      state.itemsCount += action.payload.cartCount;
      state.items.push({
        cartCount: action.payload.cartCount,
        product: action.payload.product,
      });
    },
    removeItems: (state, action: PayloadAction<CartItemType>) => {
      //state.title = action.payload.title;
    },
    clearCart: (state, action: PayloadAction<CartItemType>) => {
      state = initialState;
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;
//export const getMainBlog = (state: RootState) => state.mainBlog;
export default cartSlice.reducer;
