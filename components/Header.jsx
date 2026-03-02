import styles from '../styles/home.module.css';

export default function Header({ isDark, onToggleTheme }) {
  return (
    <header className={styles.header}>
      <div className={styles.upperLeftLogo}>
        <div>
          <a href="#top">
            <img
              src="/LogoDots.svg"
              alt="klustr Logo"
              className={styles.logoBig}
            />
          </a>
        </div>
        <div>
          <a href="#top">
            <h1 className={styles.headerItems}>klustr</h1>
          </a>
        </div>
      </div>
      <div>
        <a href="/#features" className={styles.headerItems}>
          Features
        </a>
      </div>
      <div>
        <a href="/#demo" className={styles.headerItems}>
          Demo
        </a>
      </div>
      <button
        onClick={onToggleTheme}
        className={styles.themeToggle}
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        data-testid="theme-toggle"
      >
        {isDark ? '☀️' : '🌙'}
      </button>
      <div className={styles.upperRight}>
        <a href="/#team" className={styles.headerItems}>
          Meet the Team
        </a>
      </div>
    </header>
  );
}
