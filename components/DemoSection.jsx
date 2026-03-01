import { demos } from '../data/demos';
import styles from '../styles/home.module.css';

export default function DemoSection() {
  return (
    <div className={styles.demoContainer} id='demo'>
      <div className={styles.placeholder}></div>
      <div className={styles.bodyHeaders}>
        <h1 className={styles.subtitles}>Demo</h1>
      </div>
      <div className={styles.gifContainer}>
        {demos.map((src) => (
          <img
            key={src}
            className={styles.gifImg}
            src={src}
            alt={src.split('/').pop().replace('.gif', '')}
            data-testid='gif-img'
          />
        ))}
      </div>
    </div>
  );
}
