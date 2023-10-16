import { cls } from "@/shared/lib/cls/cls.ts";
import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}
export const Button = memo((props: ButtonProps) => {
  const { className, children, disabled, ...otherProps } = props;

  return (
    <button
      type="button"
      className={cls([styles.Button, className], {
        [styles.disabled]: Boolean(disabled),
      })}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
