import Confetti from 'react-confetti';
import styles from '../styles/home.module.css';

export default function HeroSection({ showConfetti, onLogoClick, width, height }) {
  return (
    <>
      <h1 className={styles.title}>klustr</h1>

      <p className={styles.description}>
        <img
          onClick={onLogoClick}
          src='/LogoDots.svg'
          alt='klustr Logo'
          id='splashLogo'
          className={styles.splashLogo}
        />
        <br />
        <code>An open source monitoring tool for Apache Kafka</code>
      </p>

      <div className={styles.buttonContainer}>
        <div className={styles.buttonDiv}>
          <a href='https://github.com/oslabs-beta/klustr'>
            <img src='/GitHub-Mark-32px.png' alt='GitHub' />
          </a>
        </div>
        <div className={styles.buttonDiv}>
          <a href='https://medium.com/@klgvillanueva/an-intimate-look-at-your-kafka-cluster-with-klustr-dc448ca45c42'>
            <img src='/Medium.png' alt='Medium' />
          </a>
        </div>
      </div>

      <div className={styles.grid}>
        <a href='https://github.com/oslabs-beta/klustr' className={styles.card}>
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about running klustr by checking out our Github.</p>
        </a>
        <a
          href='https://medium.com/@klgvillanueva/an-intimate-look-at-your-kafka-cluster-with-klustr-dc448ca45c42'
          className={styles.card}
        >
          <h3>Learn &rarr;</h3>
          <p>Learn how klustr can help you monitor your Kafka instance by reading our Medium article!</p>
        </a>
      </div>

      {showConfetti && <Confetti width={width} height={height} />}
    </>
  );
}
