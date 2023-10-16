import { Loader } from "@/shared/ui/Loader";
import styles from "./PageLoader.module.scss";
import { cls } from "@/shared/lib/cls/cls";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={cls([styles.PageLoader, className])}>
    <Loader />
  </div>
);
