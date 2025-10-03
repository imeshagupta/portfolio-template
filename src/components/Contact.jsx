import styles from "../styles/Contact.module.css";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.header}>
        <p className={styles.subText}>Have some questions?</p>
        <FiArrowUpRight className={styles.icon} />
      </div>
      <h2 className={styles.title}>Contact me</h2>
    </div>
  );
};

export default Contact;
