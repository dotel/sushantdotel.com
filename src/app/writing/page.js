import React from 'react';

import { BLOG_TITLE } from '@/constants';
import WritingIndex from './WritingIndex';

export const metadata = {
  title: `Blogs — ${BLOG_TITLE}`,
  description:
    'Notes on AI, infrastructure, and shipping software — by Sushant Dotel.',
};

function WritingPage({ searchParams }) {
  return <WritingIndex searchParams={searchParams} basePath="/writing" />;
}

export default WritingPage;
