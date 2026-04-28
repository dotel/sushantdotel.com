import Link from 'next/link';

import styles from './Logo.module.css';

function Logo({ mobileAlignment = 'left' }) {
  return (
    <Link
      href="/"
      className={styles.wrapper}
      data-mobile-alignment={mobileAlignment}
      aria-label="Sushant Dotel — home"
    >
      <span className={styles.label}>Sushant Dotel</span>
    </Link>
  );
}

export default Logo;
