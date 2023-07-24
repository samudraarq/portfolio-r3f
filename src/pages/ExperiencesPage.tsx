import styles from "../styles/ExperiencesPage.module.css";

const ExperiencesPage = () => {
  return (
    <div>
      <div className={styles.section}>
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
          Develop Wine.Delivery web and merchant portal & mobile app user
          interface, using ReactJS and React Native.
        </p>
        <div className={styles.skillContainer}>
          <span className={styles.pill}>React</span>
          <span className={styles.pill}>React Native</span>
          <span className={styles.pill}>TypeScript</span>
        </div>
      </div>

      <div className={styles.section}>
        <p className={styles.title}>
          Glints Vetted Talent Network Talent Assessor{" "}
          <span className={styles.text}>Mar 2022 - May 2023</span>
        </p>
        <p className={styles.text}>Glints (Part-time)</p>
        <p className={styles.text}>Indonesia</p>
        <p className={styles.text}>
          Review vet candidates' technical test results and conduct a technical
          interview to identify key areas of growth.
        </p>
        <div className={styles.skillContainer}>
          <span className={styles.pill}>React</span>
          <span className={styles.pill}>TypeScript</span>
          <span className={styles.pill}>JavaScript</span>
          <span className={styles.pill}>Code Review</span>
        </div>
      </div>

      <div className={styles.section}>
        <p className={styles.title}>
          Frontend Developer{" "}
          <span className={styles.text}>Dec 2020 - May 2021</span>
        </p>
        <p className={styles.text}>Panin Dai-ichi Life (Contract)</p>
        <p className={styles.text}>Indonesia</p>
        <p className={styles.text}>
          Worked as a Front-End Developer of GoPassport - apps for insurance
          agents.
        </p>
        <div className={styles.skillContainer}>
          <span className={styles.pill}>JavaScript</span>
          <span className={styles.pill}>Angular</span>
        </div>
      </div>

      <div className={styles.section}>
        <p className={styles.title}>
          Junior Product Manager{" "}
          <span className={styles.text}>Jul 2018 - Jan 2019</span>
        </p>
        <p className={styles.text}>TADA</p>
        <p className={styles.text}>Indonesia</p>
        <p className={styles.text}>
          Worked as a Product Owner of TADA Partner – apps for cashier &
          Implemented SCRUM for TADA Partner and Backend Squad.
        </p>
        <div className={styles.skillContainer}>
          <span className={styles.pill}>Product Management</span>
          <span className={styles.pill}>SCRUM</span>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesPage;
