import React from "react";

import styles from './styles.module.scss';
import { Stack } from "@mui/material";
import { IconBookmark, IconClock, IconUser } from "@tabler/icons-react";
import Image from "next/image";

function ArticleMini() {
  return (
    <div className={styles.articlemini}>
      <div className={styles.articlemini_thumb}>
        <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*1B-feWtjurZ-SAGbTlVxlw.png" />
      </div>
      <div className={styles.articlemini_head}>
        <span className={styles.articlemini_category}>in Node JS</span>
        <h3 className={styles.articlemini_heading}>NodeJS 19 is HERE! 3 Features that will blow your mind 3 Features that will blow your mind 3 Features that will blow your mind 🤯</h3>
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
      </div>
      <p className={styles.articlemini_summary}>Node.js 19 is here and it’s packed with new cool features! From performance boosts to improved developer experience, and from enhanced security features to new APIs. In this post, we’ll see all the new features of Node.js 19. So let’s dive in!</p>
    </div>
  );
}

export default ArticleMini;
