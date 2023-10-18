import { memo, ReactNode } from "react";
import styles from "./Page.module.scss";
import { cls } from "@/shared/lib/cls/cls";

interface PageProps {
  className?: string;
  children: ReactNode;
}

export const Page = memo((props: PageProps) => {
  const { className, children } = props;

  return (
    <section className={cls([styles.Page, className])}>{children}</section>
  );
});
