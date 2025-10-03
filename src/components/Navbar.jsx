import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbarCustom}>
      <div className={styles.container}>
        <div className={styles.brand}>JULIA HUANG</div>

        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <a className={styles.link} href="#projects">
              PROJECTS
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.link} href="#about">
              ABOUT
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.link} href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
