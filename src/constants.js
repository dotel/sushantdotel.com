export const BLOG_TITLE = 'Sushant Dotel';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sushantdotel.com';
export const LIGHT_THEME_ENABLED = true;
export const DEFAULT_THEME = 'light';

// White + celadon green palette — calm, hand-mixed, not corporate.
export const LIGHT_COLORS = {
  '--color-text': 'hsl(160deg 30% 10%)',
  '--color-primary-100': 'hsl(150deg 45% 94%)',
  '--color-primary-300': 'hsl(152deg 42% 78%)',
  '--color-primary-500': 'hsl(156deg 40% 50%)',
  '--color-primary-700': 'hsl(160deg 48% 36%)',
  '--color-primary-900': 'hsl(162deg 55% 22%)',
  '--color-primary-contrast': 'hsl(150deg 50% 99%)',
  '--color-secondary-500': 'hsl(155deg 12% 42%)',
  '--color-decorative-100': 'hsl(150deg 30% 98%)',
  '--color-decorative-200': 'hsl(150deg 24% 94%)',
  '--color-decorative-300': 'hsl(150deg 20% 90%)',
  '--color-decorative-500': 'hsl(150deg 18% 82%)',
  '--color-decorative-600': 'hsl(150deg 14% 72%)',
  '--color-decorative-700': 'hsl(150deg 10% 58%)',
  '--color-decorative-800': 'hsl(155deg 12% 38%)',
  '--color-decorative-900': 'hsl(160deg 22% 24%)',
  '--color-gray-0': 'hsl(0deg 0% 100%)',
  '--color-gray-100': 'hsl(150deg 28% 98%)',
  '--color-gray-200': 'hsl(150deg 22% 94%)',
  '--color-gray-300': 'hsl(150deg 16% 82%)',
  '--color-gray-500': 'hsl(155deg 12% 46%)',
  '--color-gray-700': 'hsl(160deg 22% 24%)',
  '--color-gray-900': 'hsl(160deg 30% 10%)',
  '--color-gray-1000': 'hsl(0deg 0% 0%)',
};

export const DARK_COLORS = {
  '--color-text': 'hsl(150deg 16% 88%)',
  '--color-primary-100': 'hsl(150deg 50% 90%)',
  '--color-primary-300': 'hsl(152deg 48% 80%)',
  '--color-primary-500': 'hsl(155deg 50% 68%)',
  '--color-primary-700': 'hsl(160deg 45% 56%)',
  '--color-primary-900': 'hsl(162deg 40% 42%)',
  '--color-primary-contrast': 'hsl(160deg 28% 10%)',
  '--color-secondary-500': 'hsl(150deg 12% 64%)',
  '--color-decorative-100': 'hsl(160deg 14% 11%)',
  '--color-decorative-200': 'hsl(160deg 14% 18%)',
  '--color-decorative-300': 'hsl(160deg 12% 24%)',
  '--color-decorative-500': 'hsl(160deg 10% 36%)',
  '--color-decorative-600': 'hsl(160deg 10% 48%)',
  '--color-decorative-700': 'hsl(155deg 10% 60%)',
  '--color-decorative-800': 'hsl(150deg 14% 74%)',
  '--color-decorative-900': 'hsl(150deg 18% 86%)',
  '--color-gray-0': 'hsl(160deg 14% 11%)',
  '--color-gray-100': 'hsl(160deg 14% 18%)',
  '--color-gray-200': 'hsl(160deg 12% 26%)',
  '--color-gray-300': 'hsl(160deg 10% 42%)',
  '--color-gray-500': 'hsl(155deg 10% 60%)',
  '--color-gray-700': 'hsl(150deg 14% 76%)',
  '--color-gray-900': 'hsl(150deg 18% 90%)',
  '--color-gray-1000': 'hsl(0deg 0% 100%)',
};

// Semantic & special colors
LIGHT_COLORS['--color-primary'] = LIGHT_COLORS['--color-primary-700'];
LIGHT_COLORS['--color-secondary'] = LIGHT_COLORS['--color-secondary-500'];
LIGHT_COLORS['--color-inline-code-bg'] = 'hsl(150deg 24% 94%)';
LIGHT_COLORS['--color-selection-text'] = 'hsl(160deg 30% 10%)';
LIGHT_COLORS['--color-selection-background'] =
  LIGHT_COLORS['--color-primary-100'];
LIGHT_COLORS['--color-backdrop'] = 'hsl(150deg 30% 99%)';
LIGHT_COLORS['--color-backdrop-highlight'] =
  LIGHT_COLORS['--color-decorative-100'];
LIGHT_COLORS['--color-page-background'] = LIGHT_COLORS['--color-gray-0'];
LIGHT_COLORS['--color-page-border'] = 'hsl(150deg 18% 86% / 0.9)';
LIGHT_COLORS['--color-card-background'] = LIGHT_COLORS['--color-gray-0'];
LIGHT_COLORS['--color-card-border'] = 'hsl(150deg 18% 86% / 0.9)';
LIGHT_COLORS['--color-card-hover-border'] = LIGHT_COLORS['--color-primary-500'];
LIGHT_COLORS['--color-accent-glow'] = 'hsl(156deg 50% 45% / 0.24)';
LIGHT_COLORS['--color-accent-soft'] = 'hsl(150deg 45% 60% / 0.10)';
LIGHT_COLORS['--color-muted-text'] = 'hsl(155deg 12% 38%)';
LIGHT_COLORS['--color-chip-background'] = 'hsl(150deg 30% 96%)';
LIGHT_COLORS['--color-chip-border'] = 'hsl(150deg 22% 84% / 0.9)';
LIGHT_COLORS['--color-header-surface'] = 'hsl(150deg 30% 99% / 0.78)';
LIGHT_COLORS['--color-grid-line'] = 'hsl(155deg 18% 55% / 0.16)';
LIGHT_COLORS['--color-status-dot'] = 'hsl(155deg 60% 40%)';
LIGHT_COLORS['--color-status-dot-glow'] = 'hsl(155deg 60% 40% / 0.22)';

DARK_COLORS['--color-primary'] = DARK_COLORS['--color-primary-500'];
DARK_COLORS['--color-secondary'] = DARK_COLORS['--color-secondary-500'];
DARK_COLORS['--color-inline-code-bg'] = 'hsl(226deg 21% 26%)';
DARK_COLORS['--color-selection-text'] = 'hsl(0deg 0% 100%)';
DARK_COLORS['--color-selection-background'] = 'hsl(325deg 48% 42%)';
DARK_COLORS['--color-backdrop'] = DARK_COLORS['--color-decorative-100'];
DARK_COLORS['--color-backdrop-highlight'] =
  DARK_COLORS['--color-decorative-300'];
DARK_COLORS['--color-page-background'] = 'transparent';
DARK_COLORS['--color-page-border'] = 'hsl(225deg 22% 70% / 0.18)';
DARK_COLORS['--color-card-background'] = 'hsl(226deg 22% 16%)';
DARK_COLORS['--color-card-border'] = 'hsl(225deg 22% 70% / 0.14)';
DARK_COLORS['--color-card-hover-border'] = 'hsl(325deg 78% 76% / 0.55)';
DARK_COLORS['--color-accent-glow'] = 'hsl(325deg 78% 70% / 0.35)';
DARK_COLORS['--color-accent-soft'] = 'hsl(325deg 78% 76% / 0.12)';
DARK_COLORS['--color-muted-text'] = 'hsl(225deg 14% 64%)';
DARK_COLORS['--color-chip-background'] = 'hsl(226deg 22% 22%)';
DARK_COLORS['--color-chip-border'] = 'hsl(225deg 22% 70% / 0.18)';
DARK_COLORS['--color-header-surface'] = 'hsl(225deg 25% 9% / 0.78)';
DARK_COLORS['--color-grid-line'] = 'hsl(225deg 22% 70% / 0.06)';
DARK_COLORS['--color-status-dot'] = 'hsl(140deg 70% 60%)';
DARK_COLORS['--color-status-dot-glow'] = 'hsl(140deg 70% 60% / 0.22)';

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
