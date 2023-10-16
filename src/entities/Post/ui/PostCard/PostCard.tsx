import { cls } from "@/shared/lib/cls/cls";
import styles from "./PostCard.module.scss";

interface PostCardProps {
  className?: string;
}

export const PostCard = ({ className }: PostCardProps) => {
  return <div className={cls([styles.PostCard, className])}></div>;
};
