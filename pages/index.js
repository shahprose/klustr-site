import Head from 'next/head';
import { useState } from 'react';
import { useWindowSize } from 'react-use';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import DemoSection from '../components/DemoSection';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';
import styles from '../styles/home.module.css';

export default function Home() {
  const { isDark, toggleTheme } = useTheme();
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  return (
    <div className={styles.container}>
      <a name='top'></a>
      <Head>
        <title>klustr - a kafka monitoring solution</title>
        <link rel='icon' href='/LogoDots.svg' />
        <meta name='description' content='klustr - a kafka monitoring solution' />
      </Head>

      <Header isDark={isDark} onToggleTheme={toggleTheme} />

      <main className={styles.main}>
        <HeroSection
          showConfetti={showConfetti}
          onLogoClick={() => setShowConfetti((v) => !v)}
          width={width}
          height={height}
        />
        <FeaturesSection />
        <DemoSection />
        <TeamSection />
      </main>

      <Footer />
    </div>
  );
}
