import React from 'react';

import { BLOG_TITLE } from '@/constants';
import WritingIndex from './writing/WritingIndex';

export const metadata = {
  title: BLOG_TITLE,
  description:
    'Notes on AI, infrastructure, and shipping software — by Sushant Dotel.',
};

function Home({ searchParams }) {
  return <WritingIndex searchParams={searchParams} basePath="/" />;
}

export default Home;
