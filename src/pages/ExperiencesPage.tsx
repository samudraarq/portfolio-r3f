import styles from "../styles/ExperiencesPage.module.css";

const ExperiencesPage = () => {
  return (
    <div>
      <p className={styles.title}>
        Software Engineer{" "}
        <span className={styles.text}>June 2021 - Present</span>
      </p>
      <p className={styles.text}>
        Acalution Pte. Ltd. -{" "}
        <a
          href="https://wine.delivery/"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.link}
        >
          Wine.Delivery
        </a>
      </p>
      <p className={styles.text}>Singapore</p>
      <p className={styles.text}>
        Develop Wine.Delivery web portal & mobile app user interface, using
        ReactJS and React Native.
      </p>
      <div className={styles.skillContainer}>
        <span className={styles.pill}>React</span>
        <span className={styles.pill}>React Native</span>
        <span className={styles.pill}>TypeScript</span>
      </div>
    </div>
  );
};

export default ExperiencesPage;
