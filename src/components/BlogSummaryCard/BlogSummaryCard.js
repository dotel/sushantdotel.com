import React from 'react';
import Link from 'next/link';
import { format, isValid, parseISO } from 'date-fns';

import Card from '@/components/Card';

import styles from './BlogSummaryCard.module.css';

function BlogSummaryCard({
  slug,
  title,
  publishedOn,
  abstract,
}) {
  const href = `/${slug}`;
  const parsedDate =
    typeof publishedOn === 'string'
      ? parseISO(publishedOn)
      : new Date(publishedOn);
  const hasValidDate = isValid(parsedDate);
  const humanizedDate = hasValidDate
    ? format(parsedDate, 'MMMM do, yyyy')
    : 'Date unavailable';
  const machineDate = hasValidDate
    ? parsedDate.toISOString()
    : undefined;

  return (
    <Card className={styles.wrapper}>
      <Link href={href} className={styles.title}>
        {title}
      </Link>
      <time dateTime={machineDate}>{humanizedDate}</time>
      <p>
        {abstract}{' '}
        <Link
          href={href}
          className={styles.continueReadingLink}
        >
          Continue reading{' '}
          <span className={styles.arrow}>→</span>
        </Link>
      </p>
    </Card>
  );
}

export default BlogSummaryCard;
