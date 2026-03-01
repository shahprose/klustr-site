import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    const dark = saved ? saved === 'dark' : prefersDark;
    setIsDark(dark);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    const val = next ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', val);
    localStorage.setItem('theme', val);
  };

  return { isDark, toggleTheme };
}
