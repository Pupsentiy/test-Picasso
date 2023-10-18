import { PostSchema } from "../types/post.ts";
import { createSlice } from "@reduxjs/toolkit";

const initialState: PostSchema = {
  page: 1,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPage: (state) => {
      state.page += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: postActions } = postSlice;
export const { reducer: postReducer } = postSlice;
