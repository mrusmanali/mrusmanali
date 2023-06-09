import { map } from "lodash";
import React from "react";
import Heading from "../Heading";

import data from './data';
import styles from './styles.module.scss';

function Progress() {

  return (
    <div className={styles.progress}>
      {map(data, item => {
        return (
          <div key={item?.key} className={styles.progress_box}>
            <Heading value={item?.title} />
            {map(item?.blocks, block => {
              return (
                <div key={block?.key} className={styles.progress_block}>
                  <span className={styles.progress_title}>{block?.title}</span>
                  <span className={styles.progress_total}>
                    <span style={{width: `${block?.percent}`}} className={styles.progress_percent}></span>
                  </span>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  );
}

export default Progress;
