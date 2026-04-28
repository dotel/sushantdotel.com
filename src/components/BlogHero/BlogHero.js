import React from 'react';
import Link from 'next/link';
import { format, isValid, parseISO } from 'date-fns';
import clsx from 'clsx';

import Container from '@/components/Container';
import styles from './BlogHero.module.css';

function BlogHero({
  title,
  publishedOn,
  tags = [],
  className,
  ...delegated
}) {
  const parsed =
    typeof publishedOn === 'string'
      ? parseISO(publishedOn)
      : new Date(publishedOn);
  const valid = isValid(parsed);
  const humanized = valid ? format(parsed, 'MMMM do, yyyy') : null;
  const machine = valid ? parsed.toISOString() : undefined;

  return (
    <header
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      <Container className={styles.content}>
        <Link href="/writing" className={styles.backLink}>
          <span aria-hidden="true">←</span> All blogs
        </Link>

        {tags.length > 0 && (
          <ul className={styles.tagList} aria-label="Tags">
            {tags.map((tag) => (
              <li key={tag} className={styles.tagChip}>
                {tag}
              </li>
            ))}
          </ul>
        )}

        <h1 className={styles.title}>{title}</h1>

        {humanized && (
          <p className={styles.meta}>
            <time dateTime={machine}>{humanized}</time>
          </p>
        )}
      </Container>
    </header>
  );
}

export default BlogHero;
