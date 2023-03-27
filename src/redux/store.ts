import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// APP Reducers
import mainBlogReducer from "./slices/mainBlogSlice";
import recentBlogsReducer from "./slices/recentBlogsSlice";
import cartReducer from "./slices/cartSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  mainBlog: mainBlogReducer,
  recentBlogs: recentBlogsReducer,
  cartItems: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  /*
  reducer: {
    mainBlog: mainBlogReducer,
    recentBlogs: recentBlogsReducer,
    cartItems: cartReducer,
  },
  */
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
