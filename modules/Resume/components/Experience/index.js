import React from "react";
import { map } from "lodash";
import ExpBlock from "./components/ExpBlock";

import styles from './styles.module.scss';
import data from './data';

function Experience() {
  return (
    <div className={styles.experience}>
      <h3 className={styles.experience_heading}>Experience</h3>
      <div className={styles.experience_content}>
        {map(data, item => {
          return <div key={item?.key} className={styles.experience_block}><ExpBlock data={item} /></div>
        })}
      </div>
    </div>
  );
}

export default Experience;
