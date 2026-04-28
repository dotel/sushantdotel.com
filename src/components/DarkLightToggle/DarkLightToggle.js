'use client';
import React from 'react';
import { Sun, Moon } from 'react-feather';
import Cookie from 'js-cookie';

import { LIGHT_COLORS, DARK_COLORS } from '@/constants';
import VisuallyHidden from '@/components/VisuallyHidden';

import styles from './DarkLightToggle.module.css';

function applyTheme(nextTheme) {
  Cookie.set('color-theme', nextTheme, { expires: 1000 });
  const root = document.documentElement;
  const colors = nextTheme === 'light' ? LIGHT_COLORS : DARK_COLORS;
  root.setAttribute('data-color-theme', nextTheme);
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

function DarkLightToggle({ initialTheme }) {
  const [theme, setTheme] = React.useState(initialTheme);

  const flip = React.useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      applyTheme(next);
      return next;
    });
  }, []);

  React.useEffect(() => {
    function handleKey(event) {
      if (event.key !== 't' && event.key !== 'T') return;
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      const target = event.target;
      const tag = target?.tagName;
      if (
        tag === 'INPUT' ||
        tag === 'TEXTAREA' ||
        tag === 'SELECT' ||
        target?.isContentEditable
      ) {
        return;
      }
      event.preventDefault();
      flip();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [flip]);

  const nextLabel = theme === 'light' ? 'dark' : 'light';

  return (
    <button
      className={styles.wrapper}
      onClick={flip}
      aria-label={`Switch to ${nextLabel} mode`}
      title={`Switch to ${nextLabel} mode (T)`}
    >
      {theme === 'light' ? <Moon /> : <Sun />}
      <kbd className={styles.kbd} aria-hidden="true">
        T
      </kbd>
      <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
    </button>
  );
}

export default DarkLightToggle;
