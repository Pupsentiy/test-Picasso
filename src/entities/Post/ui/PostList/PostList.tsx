import { cls } from "@/shared/lib/cls/cls.ts";
import { memo } from "react";
import { useSelector } from "react-redux";
import { PostListItem } from "../PostListItem/PostListItem.tsx";
import styles from "./PostList.module.scss";
import { Post } from "../../model/types/post.ts";
import { getPost } from "../../model/selector/getPost.ts";
interface PostListProps {
  className?: string;
}

export const PostList = memo(({ className }: PostListProps) => {
  const post = useSelector(getPost);

  return (
    <div className={cls([styles.PostList, className])}>
      {Boolean(post) &&
        post?.map((post: Post) => <PostListItem key={post.id} post={post} />)}
    </div>
  );
});
