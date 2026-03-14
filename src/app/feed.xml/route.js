import { getBlogPostList } from '@/helpers/file-helpers';
import { BLOG_TITLE, SITE_URL } from '@/constants';

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatRssDate(dateStr) {
  return new Date(dateStr).toUTCString();
}

export async function GET() {
  const posts = await getBlogPostList();

  const rssItems = posts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/${post.slug}</guid>
      <description>${escapeXml(post.abstract)}</description>
      <pubDate>${formatRssDate(post.publishedOn)}</pubDate>
    </item>`
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(BLOG_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>Personal Blog of Sushant</description>
    <language>en</language>
    <lastBuildDate>${formatRssDate(new Date())}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
