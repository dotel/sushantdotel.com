import React from 'react';
import Link from 'next/link';

import BlogSummaryCard from '@/components/BlogSummaryCard';

import styles from './homepage.module.css';
import { getBlogPostList } from '@/helpers/file-helpers';
import { BLOG_TITLE } from '@/constants';

export const metadata = {
  title: BLOG_TITLE,
  description: 'Personal Blog of Sushant'
};

async function Home({ searchParams }) {
  const blogPostsList = await getBlogPostList()
  const selectedTag =
    typeof searchParams?.tag === 'string'
      ? searchParams.tag
      : '';

  const filteredPostsList = selectedTag
    ? blogPostsList.filter(post => {
      const tags = Array.isArray(post.tags) ? post.tags : [];
      return tags.includes(selectedTag);
    })
    : blogPostsList;

  const tagFrequency = blogPostsList.reduce((acc, post) => {
    const tags = Array.isArray(post.tags) ? post.tags : [];

    tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });

    return acc;
  }, {});

  const sortedTags = Object.entries(tagFrequency).sort(
    ([tagA], [tagB]) => tagA.localeCompare(tagB)
  );

  return (
    <div className={styles.wrapper}>
      {/* <h1 className={styles.mainHeading}>
        Latest Content:
      </h1> */}

      <div className={styles.contentGrid}>
        <section className={styles.postsColumn}>
          {
            filteredPostsList.map(post => {
              return <BlogSummaryCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                abstract={post.abstract}
                publishedOn={post.publishedOn}
              />
            })
          }

          {filteredPostsList.length === 0 && (
            <p className={styles.emptyState}>
              No posts found for “{selectedTag}”.
            </p>
          )}
        </section>

        <aside className={styles.tagCloud} aria-label="Tag cloud">
          <div className={styles.tagHeader}>
            <h2 className={styles.tagCloudHeading}>Tags</h2>
            {selectedTag && (
              <Link
                href="/"
                className={`${styles.tagChip} ${styles.resetChip}`}
                aria-label="Reset tag filter"
                title="Reset tag filter"
              >
                ↺
              </Link>
            )}
          </div>
          <ul className={styles.tagList}>
            {sortedTags.map(([tag, count]) => (
              <li key={tag}>
                <Link
                  href={{
                    pathname: '/',
                    query: { tag },
                  }}
                  className={`${styles.tagChip} ${selectedTag === tag ? styles.activeTag : ''
                    }`}
                  aria-current={selectedTag === tag ? 'page' : undefined}
                >
                  {tag}
                  <span className={styles.tagCount}>{count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>

    </div>
  );
}

export default Home;
