import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PostDetailsPage } from "@/pages/PostDetailsPage";
import {
  AppRoutes,
  getRouteMain,
  getRoutePostDetails,
} from "@/shared/const/router";
import { RouteProps } from "react-router-dom";

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.POST_DETAILS]: {
    path: getRoutePostDetails(":id"),
    element: <PostDetailsPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: "*",
    element: <NotFoundPage />,
  },
};
