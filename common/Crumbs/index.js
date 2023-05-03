import React from "react";
import Link from "next/link";
import { hasIn, isFunction, map } from "lodash";
import { IconArrowNarrowLeft } from "@tabler/icons-react";

import styles from "./styles.module.scss";

function Crumbs({ crumbs, onBack }) {
  return (
    <div className={styles.crumbs}>
      {isFunction(onBack) && (
        <button onClick={onBack} className={styles.crumbs_back}>
          <IconArrowNarrowLeft size={40} stroke={1.5} />
        </button>
      )}

      <div className={styles.crumbs_list}>
        {map(crumbs, (item, index) => {
          let isLast = index === crumbs.length - 1;
          let hasLink = hasIn(item, ["link"]);
          return (
            <>
              <div key={index} className={styles.crumbs_item}>
                {hasLink ? (
                  <Link href={item?.link} className={styles.crumbs_link}>
                    {item?.title}
                  </Link>
                ) : (
                  <span className={styles.crumbs_text}>{item?.title}</span>
                )}
              </div>
              {!isLast && <span className={styles.crumbs_sep}>/</span>}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Crumbs;
