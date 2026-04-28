import React from 'react';
import Link from 'next/link';

import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

import { getBlogPostList } from '@/helpers/file-helpers';

import styles from './writing.module.css';

async function WritingIndex({ searchParams, basePath = '/writing' }) {
  const posts = await getBlogPostList();

  const selectedTag =
    typeof searchParams?.tag === 'string' ? searchParams.tag : '';

  const filtered = selectedTag
    ? posts.filter((post) => {
      const tags = Array.isArray(post.tags) ? post.tags : [];
      return tags.includes(selectedTag);
    })
    : posts;

  const tagFrequency = posts.reduce((acc, post) => {
    const tags = Array.isArray(post.tags) ? post.tags : [];
    tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  const sortedTags = Object.entries(tagFrequency).sort(
    ([a], [b]) => a.localeCompare(b)
  );

  return (
    <Container size="wide" className={styles.wrapper}>
      <Reveal>
        <SectionHeading
          eyebrow=""
          title="Blogs."
          description="Learning in public, experimenting with agents, RAG and everything in-between."
        />
      </Reveal>

      <div className={styles.layout}>
        <section className={styles.posts} aria-label="Blog posts">
          {filtered.length === 0 && (
            <p className={styles.empty}>
              No posts tagged “{selectedTag}” yet.
            </p>
          )}

          <ul className={styles.postList}>
            {filtered.map((post, idx) => (
              <Reveal
                as="li"
                key={post.slug}
                delay={Math.min(idx * 0.03, 0.2)}
                className={styles.postItem}
              >
                <Link href={`/${post.slug}`} className={styles.postLink}>
                  <span className={styles.postDate}>
                    {formatDate(post.publishedOn)}
                  </span>
                  <span className={styles.postBody}>
                    <span className={styles.postTitle}>{post.title}</span>
                    <span className={styles.postAbstract}>
                      {post.abstract}
                    </span>
                    {Array.isArray(post.tags) && post.tags.length > 0 && (
                      <span className={styles.postTags}>
                        {post.tags.map((tag) => (
                          <span key={tag} className={styles.postTag}>
                            {tag}
                          </span>
                        ))}
                      </span>
                    )}
                  </span>
                  <span className={styles.postArrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </section>

        <aside className={styles.tagCloud} aria-label="Filter by tag">
          <div className={styles.tagHeader}>
            <h2 className={styles.tagHeading}>Tags</h2>
            {selectedTag && (
              <Link
                href={basePath}
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
                  href={{ pathname: basePath, query: { tag } }}
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
    </Container>
  );
}

function formatDate(value) {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default WritingIndex;
