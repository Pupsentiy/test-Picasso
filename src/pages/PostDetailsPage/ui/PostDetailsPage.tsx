import { PostDetails } from "@/entities/Post";
import { Page } from "@/widgets/Page/Page.tsx";
import { useParams } from "react-router-dom";
import styles from "./PostDetailsPage.module.scss";
import { cls } from "@/shared/lib/cls/cls";

interface PostDetailsPageProps {
  className?: string;
}
const PostDetailsPage = ({ className }: PostDetailsPageProps) => {
  const { id } = useParams();
  console.log(id);
  return (
    <Page className={cls([styles.PostDetailsPage, className])}>
      <PostDetails id={id} />
    </Page>
  );
};

export default PostDetailsPage;
