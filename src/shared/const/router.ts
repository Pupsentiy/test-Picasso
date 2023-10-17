export enum AppRoutes {
  MAIN = "main",
  POST_DETAILS = "post_details",
  NOT_FOUND = "not_found",
}

export const getRouteMain = () => "/";
export const getRoutePostDetails = (id: string) => `/posts/${id}`;
