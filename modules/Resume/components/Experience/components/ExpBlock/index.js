import clsx from "clsx";
import { map } from "lodash";
import React, { useState } from "react";

import styles from './styles.module.scss';

function ExpBlock({data}) {
  const [hidden, setHidden] = useState(true);

  const onClickToggle = () => {
    setHidden(false);
  }
  
  return (
    <>
      <div className={clsx(styles.expblock, hidden && styles.hidden)}>
        <h4 className={styles.expblock_heading}>{data?.title}</h4>
        <span className={styles.expblock_duration}>{data?.duration}</span>
        <p className={styles.expblock_summary}>{data?.summary}</p>

        <h5 className={styles.expblock_title}>Primary duties:</h5>

        <ul className={styles.expblock_list}>
          {map(data?.duties, (duty, index) => {
            return <li key={index} className={styles.expblock_item}>{duty}</li>
          })}
        </ul>

        <h5 className={styles.expblock_title}>Key accomplishments:</h5>

        <ul className={styles.expblock_list}>
          {map(data?.accomplishments, (accomplishment, index) => {
            return <li key={index} className={styles.expblock_item}>{accomplishment}</li>
          })}
        </ul>
      </div>
      {hidden && <a onClick={onClickToggle} className={styles.exptoggle}>...see more</a>}
    </>
  );
}

export default ExpBlock;
