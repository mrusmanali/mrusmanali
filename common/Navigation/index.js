import clsx from "clsx";
import React from "react";

import styles from './styles.module.scss';
import Link from "next/link";

function Navigation({variant = 'horizontal'}) {
  const isVertical = variant === 'vertical';
  const isHorizontal = variant === 'horizontal';

  return (
    <div className={clsx(styles.navigation, isVertical && styles.vertical, isHorizontal && styles.horizontal)}>
      <ul className={styles.navigation_list}>
        <li className={styles.navigation_item}><Link href="/" className={styles.navigation_link}>Home</Link></li>
        <li className={styles.navigation_item}><Link href="/resume" className={styles.navigation_link}>Resume</Link></li>
      </ul>
    </div>
  );
}

export default Navigation;
