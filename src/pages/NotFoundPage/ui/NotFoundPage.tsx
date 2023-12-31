import { Text } from "@/shared/ui/Text";
import styles from "./NotFoundPage.module.scss";
import { cls } from "@/shared/lib/cls/cls";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return (
    <div className={cls([styles.NotFoundPage, className])}>
      <Text title={"Not Found Page"} />
    </div>
  );
};
