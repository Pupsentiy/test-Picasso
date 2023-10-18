import { PostSchema } from "@/entities/Post";
import { UISchema } from "@/features/UI";
import { rtkApi } from "@/shared/api/rtkApi.ts";

export interface StateSchema {
  post: PostSchema;
  ui: UISchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
