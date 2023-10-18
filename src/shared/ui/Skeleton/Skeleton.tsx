import { cls } from "@/shared/lib/cls/cls.ts";
import { CSSProperties, memo } from "react";
import styles from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, height, width, border } = props;

  const style: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return <div className={cls([styles.Skeleton, className])} style={style} />;
});
