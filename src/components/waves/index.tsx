import styles from "./index.module.scss";

export const Waves = () => {
  return (
    <div className={styles["ocean"]}>
      <div className={styles["wave"]}></div>
      <div className={styles["wave"]}></div>
      {/* <div className={styles["wave"]}></div> */}
    </div>
  );
};

export default Waves;
