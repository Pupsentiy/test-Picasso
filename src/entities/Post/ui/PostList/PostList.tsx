import { Post } from "@/entities/Post";
import { cls } from "@/shared/lib/cls/cls.ts";
import { memo } from "react";
import { PostListItem } from "../PostListItem/PostListItem.tsx";
import { usePostsList } from "../../model/services/postApi.ts";
import styles from "./PostList.module.scss";
interface PostListProps {
  className?: string;
}

export const PostList = memo(({ className }: PostListProps) => {
  const { data } = usePostsList(7);
  console.log(data);
  return (
    <div className={cls([styles.PostList, className])}>
      {Boolean(data) &&
        data.map((post: Post) => <PostListItem key={post.id} post={post} />)}
    </div>
  );
});
