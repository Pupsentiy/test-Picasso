import { Page } from "@/widgets/Page/Page";
import styles from "./MainPage.module.scss";
import { cls } from "@/shared/lib/cls/cls";

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  return <Page className={cls([styles.MainPage, className])}>MainPage</Page>;
};

export default MainPage;