import { postReducer } from "@/entities/Post";
import { uiReducer } from "@/features/UI";
import { rtkApi } from "@/shared/api/rtkApi.ts";
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { StateSchema } from "./StateSchema.ts";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    post: postReducer,
    ui: uiReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkApi.middleware),
    preloadedState: initialState,
  });
  setupListeners(store.dispatch);
  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
