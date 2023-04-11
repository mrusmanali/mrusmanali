import React from "react";
import { map } from "lodash";
import EduBlock from "./components/EduBlock";

import data from './data';
import styles from './styles.module.scss';
import Heading from "../Heading";

function Education() {
  return (
    <div className={styles.education}>
      <Heading value="Education" />
      <div className={styles.education_content}>
        {map(data, item => {
          return <div key={item?.key}><EduBlock data={item} /></div>
        })}
      </div>
    </div>
  );
}

export default Education;
