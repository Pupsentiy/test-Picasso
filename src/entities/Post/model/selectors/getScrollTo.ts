import { StateSchema } from "@/app/providers/StoreProvider";

export const getScrollTo = (state: StateSchema) => state.post?.scrollTo;
