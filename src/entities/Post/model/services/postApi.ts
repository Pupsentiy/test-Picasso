import { rtkApi } from "@/shared/api/rtkApi.ts";

const postApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPostList: build.query({
      query: ({ limit = 7 }) => ({
        url: "/posts",
        method: "Get",
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const { useGetPostListQuery: usePostsList } = postApi;
