import React from 'react';
import Link from 'next/link';
import { isValid, parseISO } from 'date-fns';

import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import NextImage from 'next/image';

import Container from '@/components/Container';
import CodeSnippet from '@/components/CodeSnippet';
import Aside from '@/components/Aside';
import BlogHero from '@/components/BlogHero';
import { loadBlogPost } from '@/helpers/file-helpers';

import styles from './postSlug.module.css';

export async function generateMetadata({ params }) {
  const blogPost = await loadBlogPost(params.postSlug);
  const { title, abstract: description } = blogPost.frontmatter;
  return { title, description };
}

async function BlogPost({ params }) {
  const blogPost = await loadBlogPost(params.postSlug);
  const fm = blogPost.frontmatter;

  const parsed =
    typeof fm.publishedOn === 'string'
      ? parseISO(fm.publishedOn)
      : new Date(fm.publishedOn);
  const publishedOn = isValid(parsed) ? parsed : new Date();

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={fm.title}
        publishedOn={publishedOn}
        tags={fm.tags}
      />

      <Container className={styles.proseWrapper}>
        <div className={styles.prose}>
          <MDXRemote
            components={{
              pre: CodeSnippet,
              Aside,
              img: (props) => (
                <NextImage
                  {...props}
                  width={Number(props.width ?? 1200)}
                  height={Number(props.height ?? 675)}
                  className={styles.proseImage}
                />
              ),
            }}
            source={blogPost.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkMath],
                rehypePlugins: [rehypeKatex],
              },
            }}
          />
        </div>

        <div className={styles.endRail}>
          <Link href="/writing" className={styles.endLink}>
            <span aria-hidden="true">←</span> Back to all blogs
          </Link>
        </div>
      </Container>
    </article>
  );
}

export default BlogPost;
