import { Link } from "react-router-dom";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Frontend Developer</h1>
      <h2 className={styles.subtitle}>
        Hi, my name is Samudra. I am a frontend developer from Indonesia.
      </h2>
      <div className={styles.btnContainer}>
        <Link to="/experiences" className={styles.btnMain}>
          My Experiences
        </Link>
        <Link to="/about" className={styles.btnSecondary}>
          About Me
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
