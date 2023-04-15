import React from "react";
import { hasIn, map } from "lodash";

import styles from './styles.module.scss';

function Crumbs({crumbs}) {
  return (
    <div className={styles.crumbs}>
      {map(crumbs, (crumb, index) => {
        let isLast = index === crumbs.length-1;
        let hasLink = hasIn(crumb, ['link']);
        return (
          <div key={index} className={styles.crumbs_item}>
            {hasLink ? (
              <a className={styles.crumbs_link}>{crumb?.title}</a>
            ) : (
              <span className={styles.crumbs_text}>{crumb?.title}</span>
            )}
            {!isLast && <span className={styles.crumbs_sep}>/</span>}
          </div>
        )
      })}
    </div>
  );
}

export default Crumbs;
