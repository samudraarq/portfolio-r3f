import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navbar}>
        <Link to="/">Samudra F.A. </Link>
        <div className={styles.navItems}>
          <Link to="/experiences">My Experiences</Link>
          <Link to="/about">About Me</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
