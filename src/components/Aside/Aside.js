import React from 'react';

import styles from './Aside.module.css';

function Aside({ title, children }) {
  return (
    <aside className={styles.aside}>
      {title && <p className={styles.title}>{title}</p>}
      <div className={styles.body}>{children}</div>
    </aside>
  );
}

export default Aside;
