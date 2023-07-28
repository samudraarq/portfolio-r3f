import SendEmail from "../components/SendEmail";
import styles from "../styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Hello, thanks for visiting my website!</p>
      <p className={styles.text}>
        My name is Samudra and I'm a frontend web and app developer from
        Indonesia. I mainly use React and Typescript, but I also use React
        Native for app development. I'm always passionate about working in
        front-end development and implementing new technology and design (that's
        why this website was created using React Three Fiber 😉).
      </p>
      <p className={styles.text}>
        If you're interested in working with me, please contact me through my
        LinkedIn:
      </p>
      <a
        href="https://www.linkedin.com/in/samudra-faris-arqam/"
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        LinkedIn: Samudra Faris
      </a>
      <p className={styles.text}>or send me a message:</p>
      <SendEmail />
    </div>
  );
};

export default AboutPage;
