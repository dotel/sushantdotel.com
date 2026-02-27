export const BLOG_TITLE = 'Sushant Dotel';

// Refined, modern light theme – soft neutral backdrop with an indigo accent.
export const LIGHT_COLORS = {
  '--color-text': 'hsl(222deg 47% 11%)',
  '--color-primary-100': 'hsl(243deg 84% 95%)',
  '--color-primary-300': 'hsl(243deg 82% 87%)',
  '--color-primary-500': 'hsl(243deg 75% 59%)',
  '--color-primary-700': 'hsl(243deg 70% 52%)',
  '--color-primary-900': 'hsl(243deg 65% 42%)',
  '--color-primary-contrast': 'white',
  '--color-secondary-500': 'hsl(215deg 16% 47%)',
  '--color-decorative-100': 'hsl(210deg 40% 98%)',
  '--color-decorative-200': 'hsl(214deg 32% 94%)',
  '--color-decorative-300': 'hsl(214deg 30% 89%)',
  '--color-decorative-500': 'hsl(214deg 24% 83%)',
  '--color-decorative-600': 'hsl(213deg 18% 76%)',
  '--color-decorative-700': 'hsl(215deg 15% 65%)',
  '--color-decorative-800': 'hsl(215deg 15% 45%)',
  '--color-decorative-900': 'hsl(215deg 25% 32%)',
  '--color-gray-0': 'white',
  '--color-gray-100': 'hsl(210deg 40% 96%)',
  '--color-gray-200': 'hsl(214deg 32% 91%)',
  '--color-gray-300': 'hsl(214deg 20% 80%)',
  '--color-gray-500': 'hsl(215deg 16% 47%)',
  '--color-gray-700': 'hsl(215deg 19% 27%)',
  '--color-gray-900': 'hsl(222deg 47% 11%)',
  '--color-gray-1000': 'black',
};

export const DARK_COLORS = {
  '--color-text': 'hsl(225deg 19% 86%)',
  '--color-primary-100': 'hsl(325deg 88% 90%)',
  '--color-primary-300': 'hsl(325deg 84% 82%)',
  '--color-primary-500': 'hsl(325deg 78% 76%)',
  '--color-primary-700': 'hsl(325deg 62% 66%)',
  '--color-primary-900': 'hsl(325deg 44% 55%)',
  '--color-primary-contrast': 'hsl(225deg 25% 20%)',
  '--color-secondary-500': 'hsl(223deg 22% 66%)',
  '--color-decorative-100': '#282C35',
  '--color-decorative-200': 'hsl(226deg 21% 24%)',
  '--color-decorative-300': 'hsl(226deg 20% 28%)',
  '--color-decorative-500': 'hsl(225deg 18% 38%)',
  '--color-decorative-600': 'hsl(225deg 18% 48%)',
  '--color-decorative-700': 'hsl(225deg 20% 60%)',
  '--color-decorative-800': 'hsl(225deg 25% 74%)',
  '--color-decorative-900': 'hsl(225deg 30% 86%)',
  '--color-gray-0': '#282C35',
  '--color-gray-100': 'hsl(225deg 20% 24%)',
  '--color-gray-200': 'hsl(225deg 18% 32%)',
  '--color-gray-300': 'hsl(225deg 17% 46%)',
  '--color-gray-500': 'hsl(225deg 18% 62%)',
  '--color-gray-700': 'hsl(225deg 23% 76%)',
  '--color-gray-900': 'hsl(225deg 28% 90%)',
  '--color-gray-1000': 'hsl(0deg 0% 100%)',
};

// Semantic & special colors
LIGHT_COLORS['--color-primary'] = LIGHT_COLORS['--color-primary-500'];
LIGHT_COLORS['--color-secondary'] = LIGHT_COLORS['--color-secondary-500'];
LIGHT_COLORS['--color-inline-code-bg'] = 'hsl(214deg 30% 95%)';
LIGHT_COLORS['--color-selection-text'] = 'hsl(222deg 47% 11%)';
LIGHT_COLORS['--color-selection-background'] =
  LIGHT_COLORS['--color-primary-100'];
LIGHT_COLORS['--color-backdrop'] = LIGHT_COLORS['--color-decorative-300'];
LIGHT_COLORS['--color-backdrop-highlight'] =
  LIGHT_COLORS['--color-decorative-100'];
LIGHT_COLORS['--color-page-background'] = LIGHT_COLORS['--color-gray-0'];
LIGHT_COLORS['--color-page-border'] = 'hsl(214deg 32% 85% / 0.7)';
LIGHT_COLORS['--color-card-background'] = LIGHT_COLORS['--color-gray-0'];
LIGHT_COLORS['--color-card-border'] = 'hsl(214deg 32% 85% / 0.8)';

DARK_COLORS['--color-primary'] = DARK_COLORS['--color-primary-500'];
DARK_COLORS['--color-secondary'] = DARK_COLORS['--color-secondary-500'];
DARK_COLORS['--color-inline-code-bg'] = 'hsl(226deg 21% 26%)';
DARK_COLORS['--color-selection-text'] = 'hsl(0deg 0% 100%)';
DARK_COLORS['--color-selection-background'] = 'hsl(325deg 48% 42%)';
DARK_COLORS['--color-backdrop'] = DARK_COLORS['--color-decorative-100'];
DARK_COLORS['--color-backdrop-highlight'] =
  DARK_COLORS['--color-decorative-300'];
DARK_COLORS['--color-page-background'] = 'transparent';
DARK_COLORS['--color-page-border'] = 'hsl(225deg 22% 70% / 0.24)';
DARK_COLORS['--color-card-background'] = DARK_COLORS['--color-backdrop'];
DARK_COLORS['--color-card-border'] = DARK_COLORS['--color-page-border'];

export const LIGHT_SHADOWS = {
  '--shadow-page': `
    0px 18px 45px hsl(215deg 25% 65% / 0.22)
  `,
  '--shadow-card': `
    0px 8px 24px hsl(215deg 25% 60% / 0.18)
  `,
};

export const DARK_SHADOWS = {
  '--shadow-page': 'none',
  '--shadow-card': 'none',
};

export const LIGHT_TOKENS = {
  ...LIGHT_COLORS,
  ...LIGHT_SHADOWS,
};

export const DARK_TOKENS = {
  ...DARK_COLORS,
  ...DARK_SHADOWS,
};
