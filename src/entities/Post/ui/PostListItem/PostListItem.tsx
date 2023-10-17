import { Post } from "@/entities/Post";
import { Button } from "@/shared/ui/Button";
import { Text } from "@/shared/ui/Text";
import { cls } from "@/shared/lib/cls/cls";
import { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./PostListItem.module.scss";

interface PostListItemProps {
  className?: string;
  post: Post;
}

export const PostListItem = memo(({ className, post }: PostListItemProps) => {
  return (
    <div className={cls([styles.PostCard, className])}>
      <Text title={`№ ${post.id}`} bold />
      <Text title={post.title} size={"l"} bold />
      <Text text={`${post.body.substring(0, 50)}...`} />
      <Link to={`/posts/${post.id}`}>
        <Button className={styles.viewing}>Просмотр</Button>
      </Link>
    </div>
  );
});
