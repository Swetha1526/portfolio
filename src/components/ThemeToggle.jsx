import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/useTheme';
import './ThemeToggle.css';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle-btn ${className}`}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
    >
      <div className="theme-toggle-inner">
        {isDark ? (
          <Sun className="theme-icon sun-icon" size={20} strokeWidth={2} />
        ) : (
          <Moon className="theme-icon moon-icon" size={20} strokeWidth={2} />
        )}
      </div>
      <span className="theme-toggle-text sr-only">
        {isDark ? 'Activate light mode' : 'Activate dark mode'}
      </span>
    </button>
  );
}
