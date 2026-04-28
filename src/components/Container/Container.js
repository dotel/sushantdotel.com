import React from 'react';
import clsx from 'clsx';

import styles from './Container.module.css';

function Container({ size = 'default', as: Tag = 'div', className, children, ...delegated }) {
  return (
    <Tag
      className={clsx(styles.container, styles[size], className)}
      {...delegated}
    >
      {children}
    </Tag>
  );
}

export default Container;
