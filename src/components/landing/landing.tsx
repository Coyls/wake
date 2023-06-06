import styles from "./landing.module.scss";

export const Landing = () => {
  return (
    <section className={styles["video-container"]}>
      <video className={styles.video} muted autoPlay loop>
        <source src="/videos/rain.mp4" />
      </video>
    </section>
  );
};
