import { Post, PostSchema } from "../types/post.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: PostSchema = {
  post: [],
  page: 0,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPage: (state) => {
      state.page += 1;
    },
    setPost: (state, action: PayloadAction<Post[]>) => {
      state.post = [...state.post, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: postActions } = postSlice;
export const { reducer: postReducer } = postSlice;
