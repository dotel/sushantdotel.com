'use client';
import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '@/components/Logo';
import DarkLightToggle from '../DarkLightToggle/DarkLightToggle';
import { LIGHT_THEME_ENABLED } from '@/constants';

import styles from './Header.module.css';

const NAV_LINKS = [
  { href: '/projects', label: 'Projects' },
  { href: '/', label: 'Blogs', activePaths: ['/', '/writing'] },
];

function Header({ theme, className, ...delegated }) {
  const pathname = usePathname();

  const isActive = (href) => {
    const link = NAV_LINKS.find((item) => item.href === href);
    if (link?.activePaths) {
      return link.activePaths.some((path) => (
        path === '/' ? pathname === '/' : pathname.startsWith(path)
      ));
    }
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className={styles.outer}>
      <header
        className={clsx(styles.wrapper, className)}
        {...delegated}
      >
        <Logo />

        <nav className={styles.nav} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                styles.link,
                isActive(link.href) && styles.linkActive,
              )}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a
            href="https://linkedin.com/in/dotel"
            target="_blank"
            rel="noreferrer"
            className={styles.contactPill}
          >
            <span className={styles.contactDot} aria-hidden="true" />
            Get in touch
          </a>
          {LIGHT_THEME_ENABLED && <DarkLightToggle initialTheme={theme} />}
        </div>
      </header>
    </div>
  );
}

export default Header;
