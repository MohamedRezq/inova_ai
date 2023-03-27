import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BlogType, CartType } from "../../types";

// Define the initial state using that type
const initialState = {
  itemsCount: 0,
  items: [],
} as CartType;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<CartType>) => {
      state.itemsCount += action.payload.itemsCount;
      for (let i = 0; i < action.payload.itemsCount; i++) {
        state.items.push(action.payload.items[0]);
      }
    },
    removeItems: (state, action: PayloadAction<CartType>) => {
      //state.title = action.payload.title;
    },
    clearCart: (state, action: PayloadAction<CartType>) => {
      state = initialState;
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;
//export const getMainBlog = (state: RootState) => state.mainBlog;
export default cartSlice.reducer;
