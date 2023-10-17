import { StateSchema } from "@/app/providers/StoreProvider";

export const getPost = (state: StateSchema) => state.post?.post;
