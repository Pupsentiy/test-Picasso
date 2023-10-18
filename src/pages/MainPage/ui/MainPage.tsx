import { getPostPage, PostList, useGetPostListQuery } from "@/entities/Post";
import { Text } from "@/shared/ui/Text";
import { Page } from "@/widgets/Page/Page";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import styles from "./MainPage.module.scss";
import { cls } from "@/shared/lib/cls/cls";

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  const page = useSelector(getPostPage);
  const { isError } = useGetPostListQuery({ page });

  return (
    <Fragment>
      <Page className={cls([styles.MainPage, className])}>
        <PostList />
        {isError && (
          <div className={styles.block}>
            <Text title={"Что-то пошло не так"} align={"center"} />
          </div>
        )}
      </Page>
    </Fragment>
  );
};

export default MainPage;
