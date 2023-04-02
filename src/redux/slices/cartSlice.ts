import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartItemType, CartType } from "../../types";

// Define the initial state using that type
const initialState = {
  itemsCount: 0,
  subTotal: 0,
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
      state.subTotal = 0;
      state.items.map((item) => {
        state.subTotal += item.cartCount*item.product.implementation_price;
      })
    },
    removeItems: (state, action: PayloadAction<string>) => {
      const itemWithIdIndex = state.items.findIndex(
        (item) => item.product.model_id === action.payload
      );
      if (itemWithIdIndex > -1) {
        const it = JSON.parse(JSON.stringify(state.items[itemWithIdIndex]));
        state.items.splice(itemWithIdIndex, 1);
        state.itemsCount -= it.cartCount;
      }
    },
    editItemsCount: (state, action: PayloadAction<CartItemType>) => {
      const itemWithIdIndex = state.items.findIndex(
        (item) => item.product.model_id === action.payload.product.model_id
      );
      if (itemWithIdIndex > -1) {
        if (action.payload.cartCount > state.items[itemWithIdIndex].cartCount) {
          state.itemsCount +=
            action.payload.cartCount - state.items[itemWithIdIndex].cartCount;
        } else {
          state.itemsCount -=
            state.items[itemWithIdIndex].cartCount - action.payload.cartCount;
        }
        state.items[itemWithIdIndex].cartCount = action.payload.cartCount;
      }
      state.subTotal = 0;
      state.items.map((item) => {
        state.subTotal += item.cartCount*item.product.implementation_price;
      })
    },
    calcaulateSubTotal: (state) => {
      state.subTotal = 0;
      state.items.map((item) => {
        state.subTotal += item.cartCount*item.product.implementation_price;
      })
    },
    clearCart: (state) => {
      state = initialState;
    },
  },
});

export const { addItems, removeItems, clearCart, editItemsCount } =
  cartSlice.actions;
//export const getMainBlog = (state: RootState) => state.mainBlog;
export default cartSlice.reducer;
