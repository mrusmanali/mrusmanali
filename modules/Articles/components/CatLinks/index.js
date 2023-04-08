import React from "react";
import Link from "next/link";

import styles from './styles.module.scss';

function CatLinks() {
  return (
    <div className={styles.catlinks}>
      <h3 className={styles.catlinks_heading}>Categories</h3>
      <ul className={styles.catlinks_list}>
        <li className={styles.catlinks_item}><Link href="" className={styles.catlinks_link}>General</Link></li>
        <li className={styles.catlinks_item}><Link href="" className={styles.catlinks_link}>React </Link></li>
        <li className={styles.catlinks_item}><Link href="" className={styles.catlinks_link}>React Native</Link></li>
        <li className={styles.catlinks_item}><Link href="" className={styles.catlinks_link}>Node JS</Link></li>
        <li className={styles.catlinks_item}><Link href="" className={styles.catlinks_link}>Productivity</Link></li>
      </ul>
    </div>
  );
}

export default CatLinks;
