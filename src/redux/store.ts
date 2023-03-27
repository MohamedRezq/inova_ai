import { configureStore } from "@reduxjs/toolkit";
import mainBlogReducer from "./slices/mainBlogSlice";
import recentBlogsReducer from "./slices/recentBlogsSlice";
import cartReducer from "./slices/cartSlice";
export const store = configureStore({
  reducer: {
    mainBlog: mainBlogReducer,
    recentBlogs: recentBlogsReducer,
    cartItems: cartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
