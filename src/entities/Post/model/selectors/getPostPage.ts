import { StateSchema } from "@/app/providers/StoreProvider";

export const getPostPage = (state: StateSchema) => state.post?.page;
