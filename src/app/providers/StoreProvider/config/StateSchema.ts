import { PostSchema } from "@/entities/Post";
import { rtkApi } from "@/shared/api/rtkApi.ts";

export interface StateSchema {
  post: PostSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
