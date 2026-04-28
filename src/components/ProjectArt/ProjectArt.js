import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './ProjectArt.module.css';

const PRESETS = {
  atlas: {
    label: 'atlas/',
    glyphs: ['◆', '◇', '◆'],
    accent: 'var(--color-primary)',
    palette: 'atlas',
    caption: 'agent.run("buy item")',
  },
  agent: {
    label: 'agent/',
    glyphs: ['→', '↳', '↺'],
    accent: 'hsl(165deg 70% 60%)',
    palette: 'agent',
    caption: 'while(applications < ∞) { apply(); }',
  },
};

function ProjectArt({ art, title, eager = false, className }) {
  if (art?.kind === 'image' && art.image) {
    return (
      <div className={clsx(styles.imageFrame, className)}>
        <Image
          src={art.image}
          alt={`${title} preview`}
          className={styles.image}
          priority={eager}
          sizes="(max-width: 56rem) 100vw, 50vw"
        />
      </div>
    );
  }

  const preset = PRESETS[art?.preset] || PRESETS.atlas;

  return (
    <div
      className={clsx(styles.gradient, styles[preset.palette], className)}
      role="img"
      aria-label={`${title} cover`}
    >
      <div className={styles.gradientGrid} aria-hidden="true" />
      <div className={styles.gradientGlow} aria-hidden="true" />
      <div className={styles.gradientContent}>
        <span className={styles.gradientLabel}>{preset.label}</span>
        <div className={styles.gradientGlyphs} aria-hidden="true">
          {preset.glyphs.map((g, i) => (
            <span
              key={i}
              className={styles.glyph}
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              {g}
            </span>
          ))}
        </div>
        <span className={styles.gradientCaption}>{preset.caption}</span>
      </div>
    </div>
  );
}

export default ProjectArt;
