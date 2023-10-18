import { useGetPostByIdQuery } from "@/entities/Post";
import { cls } from "@/shared/lib/cls/cls.ts";
import { Button } from "@/shared/ui/Button";
import { Text } from "@/shared/ui/Text";
import { PageLoader } from "@/widgets/PageLoader";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PostDetails.module.scss";

interface PostDetailsProps {
  className?: string;
  id?: string;
}

export const PostDetails = memo(({ className, id }: PostDetailsProps) => {
  const navigate = useNavigate();
  const { data, isLoading, isSuccess } = useGetPostByIdQuery(id);

  const back = useCallback(() => {
    navigate("/");
  }, [navigate]);

  if (isLoading) {
    return <PageLoader />;
  }
  if (!isSuccess) {
    return <Text title={"Пост не найден"} align={"center"} />;
  }

  return (
    <div className={cls([styles.PostDetails, className])}>
      <Text title={`№ ${data?.id}`} bold />
      <Text title={data?.title} size={"l"} bold />
      <Text text={data?.body} />
      <Button onClick={back} className={styles.back}>
        Назад
      </Button>
    </div>
  );
});
