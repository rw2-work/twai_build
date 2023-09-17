import { useState, useEffect } from 'react';
import { handleThemeScroll } from '../utilits';

export function useThemeToggle(initialTheme) {
  const [theme, setTheme] = useState(initialTheme);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleThemeScroll();
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
    setIsLoading(false);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const ThemeToggleButton = () => (
    <a href="#" className="theme-toggle-button" onClick={toggleTheme}>
      <span className="toggle-button-inner">
        <span className="icon">
          {theme === 'dark-theme' ? (
            <img src="/svg/down.svg" alt="" className="fn__svg" />
          ) : (
            <img src="/svg/down.svg" alt="" className="fn__svg" />
          )}
        </span>
        <span className="text">
          {theme === 'dark-theme' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </span>
      </span>
    </a>
  );

  return { theme, toggleTheme, isLoading, ThemeToggleButton };
}
