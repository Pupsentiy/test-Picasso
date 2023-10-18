import { StateSchema } from "@/app/providers/StoreProvider";
import { getUIScrollByPath, uiActions } from "@/features/UI";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import { useThrottle } from "@/shared/lib/hooks/useThrottle/useThrottle.ts";
import React, {
  memo,
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styles from "./Page.module.scss";
import { cls } from "@/shared/lib/cls/cls";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) =>
    getUIScrollByPath(state, pathname),
  );

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  }, [scrollPosition]);

  const onScroll = useThrottle((e: React.UIEvent) => {
    dispatch(
      uiActions.setScrollPosition({
        position: e?.currentTarget?.scrollTop,
        path: pathname,
      }),
    );
  }, 500);

  return (
    <section
      ref={wrapperRef}
      onScroll={onScroll}
      className={cls([styles.Page, className])}
    >
      {children}
      {onScrollEnd ? <div className={styles.trigger} ref={triggerRef} /> : null}
    </section>
  );
});
