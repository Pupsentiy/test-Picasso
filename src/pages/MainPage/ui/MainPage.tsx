import {
  getPostPage,
  postActions,
  PostList,
  useGetPostListQuery,
} from "@/entities/Post";
import { Page } from "@/widgets/Page/Page";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import styles from "./MainPage.module.scss";
import { cls } from "@/shared/lib/cls/cls";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  const dispatch = useAppDispatch();
  const page = useSelector(getPostPage);
  const { data } = useGetPostListQuery({ limit: 7, page: page });

  const onLoadNextPart = useCallback(() => {
    dispatch(postActions.setPage());
    if (data) {
      dispatch(postActions.setPost(data));
    }
  }, [data, dispatch]);

  return (
    <Page
      onScrollEnd={onLoadNextPart}
      className={cls([styles.MainPage, className])}
    >
      <PostList />
    </Page>
  );
};

export default MainPage;
