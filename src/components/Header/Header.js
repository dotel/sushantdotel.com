import React from 'react';
import clsx from 'clsx';
import Link from 'next/link'

import Logo from '@/components/Logo';

import styles from './Header.module.css';
import DarkLightToggle from '../DarkLightToggle/DarkLightToggle';

function Header({ theme, className, ...delegated }) {
  return (
    <header
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      <Logo />

      <div className={styles.actions}>
        <Link href="/projects">Projects</Link>
        <DarkLightToggle initialTheme={theme} />
      </div>
    </header>
  );
}

export default Header;
