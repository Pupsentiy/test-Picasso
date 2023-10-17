export { getPost } from "./model/selector/getPost.ts";
export { getPostPage } from "./model/selector/getPostPage.ts";

export { postActions, postReducer } from "./model/slice/postSlice.ts";

export {
  useGetPostListQuery,
  useGetPostByIdQuery,
} from "./model/services/postApi.ts";

export type { Post, PostSchema } from "./model/types/post.ts";

export { PostList } from "./ui/PostList/PostList.tsx";
export { PostDetails } from "./ui/PostDetails/PostDetails.tsx";
