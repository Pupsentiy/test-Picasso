import {
  getPostPage,
  getScrollTo,
  postActions,
  useGetPostListQuery,
} from "@/entities/Post";
import { cls } from "@/shared/lib/cls/cls.ts";
import { useAppDispatch } from "@/shared/lib/hooks";
import { memo } from "react";
import { useSelector } from "react-redux";
import { Virtuoso } from "react-virtuoso";
import { PostListItem } from "../PostListItem/PostListItem.tsx";
import styles from "./PostList.module.scss";
interface PostListProps {
  className?: string;
}
export const PostList = memo(({ className }: PostListProps) => {
  const dispatch = useAppDispatch();
  const page = useSelector(getPostPage);
  const scrollTo = useSelector(getScrollTo);
  const { data } = useGetPostListQuery({
    limit: 5,
    page,
  });
  const onLoadNextPart = () => {
    dispatch(postActions.setPage());
  };

  return (
    <Virtuoso
      data={data}
      endReached={onLoadNextPart}
      initialTopMostItemIndex={scrollTo - 1}
      itemContent={(_, data) => {
        return (
          <div className={cls([styles.PostList, className])}>
            <PostListItem post={data} />
          </div>
        );
      }}
    />
  );
});
