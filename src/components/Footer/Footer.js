import React from 'react';
import Link from 'next/link';

import Logo from '@/components/Logo';

import DecorativeSwoops from './DecorativeSwoops';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.wrapper}>
      <DecorativeSwoops />
      <div className={styles.content}>
        <div>
          <Logo mobileAlignment="center" />
        </div>
        <nav>
          <h2 className={styles.linkHeading}>Links</h2>
          <ul className={styles.linkList}>
            <li>
              <a href="https://twitter.com/sushantd0tel">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/dotel">
                Linkedin
              </a>
            </li>
            <a href="https://github.com/dotel">
              Github
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
