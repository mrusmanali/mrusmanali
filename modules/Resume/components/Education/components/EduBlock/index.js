import React from "react";

import styles from './styles.module.scss';

function EduBlock({data}) {
  return (
    <div className={styles.edublock}>
      <h4 className={styles.edublock_heading}>{data?.title}</h4>
      <span className={styles.edublock_duration}>{data?.duration}</span>
      <p className={styles.edublock_institute}>{data?.institute}</p>
    </div>
  );
}

export default EduBlock;
