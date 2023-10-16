import { Page } from "@/widgets/Page/Page.tsx";
import styles from "./PostDetailsPage.module.scss";
import { cls } from "@/shared/lib/cls/cls";

interface PostDetailsPageProps {
  className?: string;
}
const PostDetailsPage = ({ className }: PostDetailsPageProps) => {
  return (
    <Page className={cls([styles.PostDetailsPage, className])}>
      PostDetailsPage
    </Page>
  );
};

export default PostDetailsPage;
