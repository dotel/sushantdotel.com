import React from 'react';
import {
  Work_Sans,
  Spline_Sans_Mono,
} from 'next/font/google';
import clsx from 'clsx';

import { LIGHT_TOKENS, DARK_TOKENS, SITE_URL } from '@/constants';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './styles.css';
import 'katex/dist/katex.min.css';


const mainFont = Work_Sans({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});
const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
});

function RootLayout({ children }) {
  const theme = 'dark'; // Light theme disabled for now

  return (
    <html
      lang="en"
      className={clsx(mainFont.variable, monoFont.variable)}
      data-color-theme={theme}
      style={theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS Feed"
          href={`${SITE_URL}/feed.xml`}
        />
      </head>

      <body>
        <Header theme={theme} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
