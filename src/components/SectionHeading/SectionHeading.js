import React from 'react';
import clsx from 'clsx';

import styles from './SectionHeading.module.css';

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  id,
  className,
}) {
  return (
    <header className={clsx(styles.wrapper, styles[align], className)}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </header>
  );
}

export default SectionHeading;
