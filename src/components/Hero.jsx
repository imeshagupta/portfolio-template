import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Artist Redefining <br />
          <span className={styles.highlight}>Architecture</span> with <br />
          <span className={styles.bold}>AI-Driven Design</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
