import { Post } from "@/entities/Post";
import { rtkApi } from "@/shared/api/rtkApi.ts";

export interface GetPostListArg {
  limit?: number;
  page: number;
}

const postApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPostList: build.query<Post[], GetPostListArg>({
      query: ({ limit, page = 1 }) => ({
        url: "/posts",
        method: "GET",
        params: {
          _limit: limit,
          _page: page,
        },
        keepUnusedDataFor: 5,
      }),

      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentState, newItems) => {
        currentState.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
    }),
    getPostById: build.query<Post, string | undefined>({
      query: (id?: string) => `/posts/${id}`,
    }),
  }),
});

export const { useGetPostListQuery, useGetPostByIdQuery } = postApi;
