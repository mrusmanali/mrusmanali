import clsx from "clsx";
import React from "react";

import styles from './styles.module.scss';

function Navigation({variant = 'horizontal'}) {
  const isVertical = variant === 'vertical';
  const isHorizontal = variant === 'horizontal';

  return (
    <div className={clsx(styles.navigation, isVertical && styles.vertical, isHorizontal && styles.horizontal)}>
      <ul className={styles.navigation_list}>
        <li className={styles.navigation_item}><a className={styles.navigation_link}>Home</a></li>
        <li className={styles.navigation_item}><a className={styles.navigation_link}>Resume</a></li>
      </ul>
    </div>
  );
}

export default Navigation;
