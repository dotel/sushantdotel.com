import React from 'react';

import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import CodeSnippet from '@/components/CodeSnippet';
import Aside from '@/components/Aside';
import styles from './postSlug.module.css';
import { loadBlogPost } from '@/helpers/file-helpers';
import BlogHero from '@/components/BlogHero';


export async function generateMetadata({ params }) {
  const blogPost = await loadBlogPost(params.postSlug)
  const { title, abstract: description } = blogPost.frontmatter;
  return {
    title,
    description
  };
}


async function BlogPost({ params }) {
  // Todo: Cache this
  const blogPost = await loadBlogPost(params.postSlug)
  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={blogPost.frontmatter.title}
        publishedOn={new Date()}
        tags={blogPost.frontmatter.tags}
      />

      <div className={styles.page}>
        <br /> 
        <MDXRemote
          components={{ pre: CodeSnippet, Aside }}
          source={blogPost.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkMath],
              rehypePlugins: [rehypeKatex],
            },
          }}
        />
      </div>

    </article >
  );
}

export default BlogPost;
