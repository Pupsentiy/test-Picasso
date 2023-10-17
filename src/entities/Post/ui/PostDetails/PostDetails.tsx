import { useGetPostByIdQuery } from "@/entities/Post";
import { cls } from "@/shared/lib/cls/cls.ts";
import styles from "./PostDetails.module.scss";

interface PostDetailsProps {
  className?: string;
  id?: string;
}

export const PostDetails = ({ className, id }: PostDetailsProps) => {
  const { data } = useGetPostByIdQuery(id);
  console.log(data);
  return <div className={cls([styles.PostDetails, className])}></div>;
};
