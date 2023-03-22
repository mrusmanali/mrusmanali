import React from "react";
import { map } from "lodash";
import EduBlock from "./components/EduBlock";

import data from './data';
import styles from './styles.module.scss';

function Education() {
  return (
    <div className={styles.education}>
      <h3 className={styles.education_heading}>Education</h3>
      <div className={styles.education_content}>
        {map(data, item => {
          return <div key={item?.key}><EduBlock data={item} /></div>
        })}
      </div>
    </div>
  );
}

export default Education;
