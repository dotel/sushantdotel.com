'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

function Reveal({
  children,
  delay = 0,
  y = 16,
  as = 'div',
  once = true,
  className,
  ...delegated
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    return (
      <MotionTag className={className} {...delegated}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...delegated}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
