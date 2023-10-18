import { getPostPage, useGetPostListQuery } from "@/entities/Post";
import { cls } from "@/shared/lib/cls/cls.ts";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton.tsx";
import { memo } from "react";
import { useSelector } from "react-redux";
import { PostListItem } from "../PostListItem/PostListItem.tsx";
import styles from "./PostList.module.scss";
import { Post } from "../../model/types/post.ts";
interface PostListProps {
  className?: string;
}

export const PostList = memo(({ className }: PostListProps) => {
  const page = useSelector(getPostPage);
  const { data, isFetching } = useGetPostListQuery({
    limit: 5,
    page: page,
  });

  return (
    <div className={cls([styles.PostList, className])}>
      {Boolean(data) &&
        data?.map((post: Post) => <PostListItem key={post.id} post={post} />)}
      {isFetching &&
        [...new Array(5)].map((_, index) => (
          <Skeleton key={index} height={240} />
        ))}
    </div>
  );
});
