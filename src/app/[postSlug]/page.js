import React from 'react';

import { MDXRemote } from 'next-mdx-remote/rsc'
import CodeSnippet from '@/components/CodeSnippet';
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
      />

      <div className={styles.page}>
        <br /> 
        <MDXRemote
          components={{ pre: CodeSnippet }}
          source={blogPost.content}
        />
      </div>

    </article >
  );
}

export default BlogPost;
