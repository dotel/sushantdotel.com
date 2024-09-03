import React from 'react';

import styles from './Aside.module.css';

function Aside({ children }) {
  return (
    <div className={styles.aside}>
      {children}
    </div>
  );
}

export default Aside;


