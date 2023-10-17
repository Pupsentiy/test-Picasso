import { Post } from "@/entities/Post";
import { rtkApi } from "@/shared/api/rtkApi.ts";

export interface GetPostListArg {
  limit?: number;
  page: number;
}

const postApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPostList: build.query<Post[], GetPostListArg>({
      query: ({ limit, page = 0 }) => ({
        url: "/posts",
        method: "GET",
        params: {
          _limit: limit,
          _page: page,
        },
      }),
    }),
    getPostById: build.query({
      query: (id?: string) => `/posts/${id}`,
    }),
  }),
});

export const { useGetPostListQuery, useGetPostByIdQuery } = postApi;
