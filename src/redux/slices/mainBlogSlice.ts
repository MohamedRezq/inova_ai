import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BlogType } from "../../types";

// Define the initial state using that type
const initialState = {
  title: '',
  writeup: '',
  likes: 0,
  created_at: '',
  updated_at: '',
  comments: []
} as BlogType;

export const mainBlogSlice = createSlice({
  name: "mainBlog",
  initialState,
  reducers: {
    setMainBlog: (state, action: PayloadAction<BlogType>) => {
      state.title = action.payload.title;
      state.comments = action.payload.comments;
      state.created_at = action.payload.created_at;
      state.likes = action.payload.likes;
      state.writeup = action.payload.writeup;
      state.updated_at = action.payload.updated_at;
    }
  },
});

export const { setMainBlog } = mainBlogSlice.actions;
//export const getMainBlog = (state: RootState) => state.mainBlog;
export default mainBlogSlice.reducer;
