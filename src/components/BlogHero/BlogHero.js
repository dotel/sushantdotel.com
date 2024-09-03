import React from 'react';
import { format } from 'date-fns';
import clsx from 'clsx';

import styles from './BlogHero.module.css';

function BlogHero({
  title,
  publishedOn,
  tags = [],
  className,
  ...delegated
}) {
  const humanizedDate = format(
    new Date(publishedOn),
    'MMMM do, yyyy'
  );

  return (
    <header
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>
          Published on{' '}
          <time dateTime={publishedOn}>
            {humanizedDate}
          </time>
        </p>
        {tags.length > 0 && (
          <ul className={styles.tagList}>
            {tags.map(tag => (
              <li key={tag} className={styles.tagChip}>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

export default BlogHero;
