import { features } from '../data/features';
import styles from '../styles/home.module.css';

export default function FeaturesSection() {
  return (
    <div className={styles.featuresContainer} id='features'>
      <div className={styles.placeholder}></div>
      <div className={styles.bodyHeaders}>
        <h1 className={styles.subtitles}>Features</h1>
      </div>
      <div className={styles.grid}>
        {features.map((feature) => (
          <div key={feature.title} className={styles.card}>
            <h3>{feature.title}</h3>
            {feature.description}
          </div>
        ))}
      </div>
    </div>
  );
}
