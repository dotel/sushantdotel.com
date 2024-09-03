"use client";
import React from 'react';
import clsx from 'clsx';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

import Logo from '@/components/Logo';

import styles from './Header.module.css';
import DarkLightToggle from '../DarkLightToggle/DarkLightToggle';

function Header({ theme, className, ...delegated }) {
  const pathname = usePathname();

  return (
    <header
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      <Logo />

      <div className={styles.actions}>
        <Link
          href="/projects"
          className={clsx(styles.link, pathname === '/projects' && styles.linkActive)}
          aria-current={pathname === '/projects' ? 'page' : undefined}
        >
          Projects
        </Link>
        <Link
          href="/about"
          className={clsx(styles.link, pathname === '/about' && styles.linkActive)}
          aria-current={pathname === '/about' ? 'page' : undefined}
        >
          About
        </Link>
        <DarkLightToggle initialTheme={theme} />
      </div>
    </header>
  );
}

export default Header;
