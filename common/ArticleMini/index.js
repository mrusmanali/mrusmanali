import React from "react";
import { IconArrowNarrowRight, IconBookmark, IconClock, IconUser } from "@tabler/icons-react";

import styles from './styles.module.scss';
import clsx from "clsx";
import Link from "next/link";
import { truncate } from "lodash";

function ArticleMini({data}) {
  return (
    <div className={clsx(styles.articlemini)}>
      <Link href="" className={styles.articlemini_head}>
        <span className={styles.articlemini_category}>in Node JS</span>
        <h3 className={styles.articlemini_heading}>{data?.title}</h3>
        <div className={styles.articlemini_info}>
          <div className={styles.articlemini_posted}>
            <IconClock className={styles.articlemini_posted_icon} size={20} />
            <span className={styles.articlemini_posted_text}>{data?.date}</span>
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
      <div className={styles.articlemini_content}>
        <div className={styles.articlemini_thumb}><img src={data?.banner} /></div>
        <p className={styles.articlemini_summary}>{truncate(data?.content, {length: 200})}</p>
      </div>
      <a className={styles.articlemini_link}>
        <span className={styles.articlemini_link_text}>Continue Reading</span> 
        <IconArrowNarrowRight className={styles.articlemini_link_icon} size={30} />
      </a>
    </div>
  );
}

export default ArticleMini;
