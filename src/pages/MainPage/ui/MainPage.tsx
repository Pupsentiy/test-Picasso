import {
  getPostPage,
  postActions,
  PostList,
  useGetPostListQuery,
} from "@/entities/Post";
import { Text } from "@/shared/ui/Text";
import { Page } from "@/widgets/Page/Page";
import { Fragment, useCallback } from "react";
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
  const { isError } = useGetPostListQuery({
    page: page,
  });

  const onLoadNextPart = useCallback(() => {
    dispatch(postActions.setPage());
  }, [dispatch]);

  return (
    <Fragment>
      <Page
        onScrollEnd={onLoadNextPart}
        className={cls([styles.MainPage, className])}
      >
        <PostList />
      </Page>
      {isError && (
        <div className={styles.block}>
          <Text title={"Что-то пошло не так"} align={"center"} />
        </div>
      )}
    </Fragment>
  );
};

export default MainPage;
