import styles from '../styles/home.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div>
        <img src="/LogoDots.svg" alt="klustr Logo" className={styles.logoBig} />
      </div>
      <a href="#top" rel="noopener noreferrer">
        © {currentYear} klustr / OSLabs. All rights reserved.{' '}
      </a>
    </footer>
  );
}
