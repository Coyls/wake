import styles from "./index.module.scss";
import { Navbar } from "../navbar/navbar";
// import { useTranslation } from "next-i18next";

export const Landing = () => {
  // const { t } = useTranslation();

  return (
    <section className={styles.sky}>
      <Navbar />
      {/* <h1>{t("Welcome to React")}</h1> */}
    </section>
  );
};
