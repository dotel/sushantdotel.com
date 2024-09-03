import React from 'react';

import styles from './DecorativeSwoops.module.css';

function DecorativeSwoops() {
  return (
    <div className={styles.wrapper}>
      <Blocker />
    </div>
  );
}

function Blocker() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1706 296"
      className={styles.blocker}
      preserveAspectRatio="none"
    >
      <path d="M0 186C95 120 190 120 285 186C380 252 475 252 570 186C665 120 760 120 855 186C950 252 1045 252 1140 186C1235 120 1330 120 1425 186C1520 252 1613 252 1706 186V296H0V186Z"></path>
    </svg>
  );
}

export default DecorativeSwoops;
