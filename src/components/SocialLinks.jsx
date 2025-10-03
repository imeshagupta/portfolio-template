import styles from "../styles/SocialLinks.module.css";

const SocialLinks = () => {
  return (
    <div className={styles.socialContainer}>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        Instagram
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        Twitter
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        LinkedIn
      </a>
    </div>
  );
};

export default SocialLinks;
