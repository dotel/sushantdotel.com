import React from 'react';
import Link from 'next/link';

import Container from '@/components/Container';
import styles from './Footer.module.css';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/dotel' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/dotel' },
  { label: 'RSS', href: '/feed.xml' },
];

const NAV_LINKS = [
  { label: 'Projects', href: '/projects' },
  { label: 'Blogs', href: '/' },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.wrapper}>
      <Container size="wide" className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <p className={styles.brandName}>Sushant Dotel</p>
            <p className={styles.brandTag}>
              Full-stack engineer building AI-native products. M.S. CS @ UH,
              Houston, TX.
            </p>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Site</h3>
              <ul className={styles.columnList}>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.columnLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Elsewhere</h3>
              <ul className={styles.columnList}>
                {SOCIAL_LINKS.map((link) => {
                  const external = link.href.startsWith('http');
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={styles.columnLink}
                        {...(external
                          ? { target: '_blank', rel: 'noreferrer' }
                          : {})}
                      >
                        {link.label}
                        {external && (
                          <span aria-hidden="true" className={styles.extArrow}>
                            ↗
                          </span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Contact</h3>
              <ul className={styles.columnList}>
                <li>
                  <a
                    href="mailto:dotelnp@gmail.com"
                    className={styles.columnLink}
                  >
                    dotelnp@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.now}>
          <span className={styles.nowLabel}>Now</span>
          <span className={styles.nowText}>
            shipping a Next.js storefront for AI agents
            <span className={styles.cursor} aria-hidden="true" />
          </span>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {year} Sushant Dotel.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
