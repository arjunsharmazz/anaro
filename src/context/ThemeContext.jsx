import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = window.localStorage.getItem('anaro-theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    const body = document.body;
    body.classList.toggle('light', !isDark);
    window.localStorage.setItem('anaro-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const value = useMemo(
    () => ({
      isDark,
      toggleTheme: () => setIsDark((current) => !current),
    }),
    [isDark]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}