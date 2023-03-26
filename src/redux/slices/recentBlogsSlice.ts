import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BlogArrayType, BlogType } from "../../types";

// Define the initial state using that type
const initialState = [] as BlogType[];

export const recentBlogSlice = createSlice({
  name: "recentBlogs",
  initialState,
  reducers: {
    setRecentBlogs: (state, action: PayloadAction<BlogType[]>) => {
        action.payload.map((blog) => {
            state.push(blog);
        })
    }
  },
});

export const { setRecentBlogs } = recentBlogSlice.actions;
//export const getMainBlog = (state: RootState) => state.mainBlog;
export default recentBlogSlice.reducer;
