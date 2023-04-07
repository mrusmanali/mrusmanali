import React from "react";
import { IconBookmark, IconClock, IconUser } from "@tabler/icons-react";

import styles from './styles.module.scss';
import clsx from "clsx";
import Link from "next/link";

function ArticleMini() {
  return (
    <div className={clsx(styles.articlemini)}>
      <Link href="" className={styles.articlemini_head}>
        <div className={styles.articlemini_thumb}>
          <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*1B-feWtjurZ-SAGbTlVxlw.png" />
        </div>
        <span className={styles.articlemini_category}>in Node JS</span>
        <h3 className={styles.articlemini_heading}>NodeJS 19 is HERE! 3 Features that will blow your mind 🤯</h3>
        <div className={styles.articlemini_info}>
          <div className={styles.articlemini_posted}>
            <IconClock className={styles.articlemini_posted_icon} size={20} />
            <span className={styles.articlemini_posted_text}>January 29, 2021</span>
          </div>
          <div className={styles.articlemini_posted}>
            <IconUser className={styles.articlemini_posted_icon} size={20} />
            <span className={styles.articlemini_posted_text}>Usman Ali</span>
          </div>
          <div className={styles.articlemini_posted}>
            <IconBookmark className={styles.articlemini_posted_icon} size={20} />
            <span className={styles.articlemini_posted_text}>5 min read</span>
          </div>
        </div>
      </Link>
      <p className={styles.articlemini_summary}>Node.js 19 is here and it’s packed with new cool features! From performance boosts to improved developer experience, and from enhanced security features to new APIs.</p>
    </div>
  );
}

export default ArticleMini;
