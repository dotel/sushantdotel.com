export const BLOG_TITLE = 'Sushant Dotel';

export const LIGHT_COLORS = {
  '--color-text': 'hsl(0deg 0% 5%)',
  '--color-primary-100': 'hsl(0deg 0% 95%)',
  '--color-primary-300': 'hsl(0deg 0% 85%)',
  '--color-primary-500': 'hsl(0deg 0% 60%)',
  '--color-primary-700': 'hsl(0deg 0% 33%)',
  '--color-primary-900': 'hsl(0deg 0% 20%)',
  '--color-primary-contrast': 'white',
  '--color-secondary-500': 'hsl(0deg 0% 50%)',
  '--color-decorative-100': 'hsl(0deg 0% 96%)',
  '--color-decorative-200': 'hsl(0deg 0% 92%)',
  '--color-decorative-300': 'hsl(0deg 0% 88%)',
  '--color-decorative-500': 'hsl(0deg 0% 75%)',
  '--color-decorative-600': 'hsl(0deg 0% 65%)',
  '--color-decorative-700': 'hsl(0deg 0% 50%)',
  '--color-decorative-800': 'hsl(0deg 0% 33%)',
  '--color-decorative-900': 'hsl(0deg 0% 25%)',
  '--color-gray-0': 'white',
  '--color-gray-100': 'hsl(0deg 0% 90%)',
  '--color-gray-200': 'hsl(0deg 0% 85%)',
  '--color-gray-300': 'hsl(0deg 0% 70%)',
  '--color-gray-500': 'hsl(0deg 0% 50%)',
  '--color-gray-700': 'hsl(0deg 0% 25%)',
  '--color-gray-900': 'hsl(0deg 0% 10%)',
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
LIGHT_COLORS['--color-inline-code-bg'] = 'hsl(0deg 0% 88%)';
LIGHT_COLORS['--color-selection-text'] = 'black';
LIGHT_COLORS['--color-selection-background'] = LIGHT_COLORS['--color-decorative-700'];
LIGHT_COLORS['--color-backdrop'] = LIGHT_COLORS['--color-decorative-500'];
LIGHT_COLORS['--color-backdrop-highlight'] = LIGHT_COLORS['--color-decorative-300'];
LIGHT_COLORS['--color-page-background'] = LIGHT_COLORS['--color-decorative-100'];
LIGHT_COLORS['--color-page-border'] = 'transparent';
LIGHT_COLORS['--color-card-background'] = LIGHT_COLORS['--color-gray-0'];
LIGHT_COLORS['--color-card-border'] = 'transparent';

DARK_COLORS['--color-primary'] = DARK_COLORS['--color-primary-500'];
DARK_COLORS['--color-secondary'] = DARK_COLORS['--color-secondary-500'];
DARK_COLORS['--color-inline-code-bg'] = 'hsl(226deg 21% 26%)';
DARK_COLORS['--color-selection-text'] = 'hsl(0deg 0% 100%)';
DARK_COLORS['--color-selection-background'] = 'hsl(325deg 48% 42%)';
DARK_COLORS['--color-backdrop'] = DARK_COLORS['--color-decorative-100'];
DARK_COLORS['--color-backdrop-highlight'] = DARK_COLORS['--color-decorative-300'];
DARK_COLORS['--color-page-background'] = 'transparent';
DARK_COLORS['--color-page-border'] = 'hsl(225deg 22% 70% / 0.24)';
DARK_COLORS['--color-card-background'] = DARK_COLORS['--color-backdrop'];
DARK_COLORS['--color-card-border'] = DARK_COLORS['--color-page-border'];

export const LIGHT_SHADOWS = {
  '--shadow-page': `
    0px 1px 2px hsl(0deg 0% 50% / 0.25),
    0px 3px 6px hsl(0deg 0% 50% / 0.25),
    0px 9px 18px hsl(0deg 0% 50% / 0.25),
    0px 18px 36px hsl(0deg 0% 50% / 0.25),
    0px 54px 108px hsl(0deg 0% 50% / 0.25)
  `,
  '--shadow-card': `
    0px 1px 2px hsl(0deg 0% 50% / 0.2),
    0px 2px 4px hsl(0deg 0% 50% / 0.2),
    0px 4px 8px hsl(0deg 0% 50% / 0.2),
    0px 8px 16px hsl(0deg 0% 50% / 0.2)
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
